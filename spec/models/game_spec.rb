require 'spec_helper'
require 'byebug'

describe Game do
  before(:each) do
    @player = Player.create!(:name=> "Test", :email => "test@test.com")
    stub_request(:post, "http://battle.platform45.com/register").
      with(:body   => "{'name': '#{@player.name}','email':'#{@player.email}'}").
      to_return(:body  => "{'id':'1234','x':'3','y':'5'}",
           :status => 200)
    @game = Game.create(:player_id=> @player.id, :p45_game_id => "1234")
  end

  it "should nuke p45 but miss" do
    stub_request(:post, "http://battle.platform45.com/nuke").
      with(:body   => '{"id":"1234","x":4,"y":5}').
      to_return(:body => '{"status":"miss","x":"1","y":"3"}',
           :status => 200)

    # when we nuke, we also get nuked, so change of 2 in count
    lambda do
      @game.nuke(4,5)
    end.should change(Salvo, :count).by(2)
    @game.salvos.last.enemy.should be_true # the last one should be what the enemy did
    @game.salvos.last.x.should eq(1)
    @game.salvos.last.y.should eq(3)
    @game.salvos.all[-2].enemy.should be_false # our nuke
    @game.salvos.all[-2].status.should eq("miss")
    @game.salvos.all[-2].hit.should be_false
    @game.salvos.all[-2].x.should eq(4)
    @game.salvos.all[-2].y.should eq(5)
  end

  it "should nuke p45 and hit" do
    stub_request(:post, "http://battle.platform45.com/nuke").
      with(:body   => '{"id":"testgameid","x":2,"y":3}').
      to_return(:body => '{"status":"hit","x":"4","y":"5"}',
           :status => 200)
    # when we nuke, we also get nuked, so change of 2 in count
    lambda do
      @game.nuke(2,3)
    end.should change(Salvo, :count).by(2)
    @game.salvos.last.enemy.should be_true # the last one should be what the enemy did
    @game.salvos.last.x.should eq(4)
    @game.salvos.last.y.should eq(5)
    @game.salvos.all[-2].enemy.should be_false # our nuke
    @game.salvos.all[-2].status.should eq("hit")
    @game.salvos.all[-2].hit.should be_true
    @game.salvos.all[-2].x.should eq(2)
    @game.salvos.all[-2].y.should eq(3)
  end

  it "should be registerable" do
    @game.p45_game_id.should eq("testgameid")
  end

  it "should have first enemy fire after registration" do
    @game.salvos.count.should eq(1)
    @game.salvos.first.enemy?.should be_true
  end

  it "should have a fleet when created" do
    # should have 7 ships in the fleet now
    @game.ships.count.should eq(7)

    # make sure some of our ship names show up
    @game.ships.map(&:name).should include "Submarine"
    @game.ships.map(&:name).should include "Battleship"
    @game.ships.map(&:name).select{|n| n == "Submarine"}.size.should eq(2)
    @game.ships.map(&:name).select{|n| n == "Patrol Boat"}.size.should eq(2)
  end

  it "should be able to sink a ship" do
    @game = Game.create(:name => "Test", :email => "test@test.com")
    @game.ships.sunk.count.should eq(0)
    @game.ships.alive.count.should eq(7)
    @game.sink_ship("Battleship")
    @game.ships.sunk.count.should eq(1)
    @game.ships.alive.count.should eq(6)
    @game.sink_ship("Submarine")
    @game.ships.sunk.count.should eq(2)
    @game.ships.alive.count.should eq(5)
    @game.sink_ship("Submarine")
    @game.ships.sunk.count.should eq(3)
    @game.ships.alive.count.should eq(4)
    # should see no change when sinking an already sunk ship
    @game.sink_ship("Submarine")
    @game.ships.sunk.count.should eq(3)
    @game.ships.alive.count.should eq(4)
    # should see no change when sinking an already sunk ship
    @game.sink_ship("Battleship")
    @game.ships.sunk.count.should eq(3)
    @game.ships.alive.count.should eq(4)
  end
end
