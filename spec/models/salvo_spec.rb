require 'spec_helper'

describe Salvo do
  describe "Game Related" do
    before(:each) do
      stub_request(:post, "http://battle.platform45.com/register").
        with(:body   => '{"name":"Test","email":"test@test.com"}').
        to_return(:body  => '{"id":"testgameid","x":"3","y":"5"}',
                  :status => 200)
      @game = Game.create(:name => "Test", :email => "test@test.com")
    end

    it "should know the next surrounding coords for all our hit (non sunk) salvos" do
      @game.salvos.fire(3,4, "hit")                    
      @game.salvos.fire(6,8, "hit")                    
      @game.salvos.all_surrounding_coords.should eq([[4,4],[2,4],[3,5],[3,3],[7,8],[5,8],[6,9],[6,7]])
    end

    it "should know the next best shot" do
      @game.salvos.fire(3,4, "hit")                    
      @game.salvos.next_best_shot.should eq([4,4])
    end

    it "should have an available coord count of 100 initially" do
      @game.salvos.available_coords.count.should eq(100) 
    end
    
    it "should have an available coord count of 95 after a mixture of hits" do
      @game.salvos.available_coords.count.should eq(100) 
      @game.salvos.fire(3,4, "hit")                    
      @game.salvos.fire(3,5, "miss")                    
      @game.salvos.fire(3,6, "miss")                    
      @game.salvos.fire(3,7, "miss")                    
      @game.salvos.fire(3,8, "hit")                    
      @game.salvos.available_coords.count.should eq(95) 
      @game.salvos.available_coords.should_not include([3,4])
      @game.salvos.available_coords.should_not include([3,5])
      @game.salvos.available_coords.should_not include([3,6])
      @game.salvos.available_coords.should_not include([3,7])
      @game.salvos.available_coords.should_not include([3,8])
    end

    it "should update related salvo shots if one sinks a salvo" do
      @game.salvos.fire(3,4, "hit")                    
      @game.salvos.ours.count.should eq(1)
      @game.salvos.last.sunk.should be_blank
      @game.salvos.fire(3,5, "hit")                    
      @game.salvos.last.sunk.should be_blank
      @game.salvos.fire(3,6, "hit", "Destroyer")                    
      @game.salvos.last.sunk.should eq("Destroyer")
      # make sure all related game salvos are "sunk" 
      @game.salvos.ours.map(&:sunk).uniq.count.should eq(1)
      @game.salvos.ours.map(&:sunk).uniq.first.should eq("Destroyer")
    end
    
    it "should update related salvo shots if one sinks a salvo even if more than needed exist on same line" do
      @game.salvos.fire(3,1, "hit")                    
      @game.salvos.fire(3,9, "hit")                    
      @game.salvos.fire(3,4, "hit")                    
      @game.salvos.fire(3,5, "hit")                    
      @game.salvos.fire(3,6, "hit", "Destroyer")                    
      @game.salvos.last.sunk.should eq("Destroyer")
      # make sure all related game salvos are "sunk" 
      @game.salvos.ours.map(&:sunk).uniq.count.should eq(2)
      @game.salvos.ours.map(&:sunk).select{|s| s == "Destroyer"}.count.should eq(3)
      @game.salvos.ours.map(&:sunk).uniq.should include("Destroyer")
      @game.salvos.ours.map(&:sunk).uniq.should include(nil)
    end
    
    it "should update related salvo shots if one sinks a salvo even if we have to pick between right count of xs and ys --- T shape" do
      @game.salvos.fire(6,6, "hit")                    
      @game.salvos.fire(4,6, "hit")                    
      @game.salvos.fire(1,6, "hit")                    
      @game.salvos.fire(3,1, "hit")                    
      @game.salvos.fire(3,9, "hit")                    
      @game.salvos.fire(3,4, "hit")                    
      @game.salvos.fire(3,5, "hit")                    
      @game.salvos.fire(3,6, "hit", "Destroyer")                    
      # make sure all related game salvos are "sunk" 
      @game.salvos.ours.map(&:sunk).uniq.count.should eq(2)
      @game.salvos.ours.map(&:sunk).select{|s| s == "Destroyer"}.count.should eq(3)
      @game.salvos.ours.map(&:sunk).uniq.should include("Destroyer")
      @game.salvos.ours.map(&:sunk).uniq.should include(nil)
    end
    
    it "should update related salvo shots if one sinks a salvo in y dir" do
      @game.salvos.fire(4,3, "hit")                    
      @game.salvos.ours.count.should eq(1)
      @game.salvos.last.sunk.should be_blank
      @game.salvos.fire(5,3, "hit")                    
      @game.salvos.last.sunk.should be_blank
      @game.salvos.fire(6,3, "hit", "Destroyer")                    
      @game.salvos.last.sunk.should eq("Destroyer")
      # make sure all related game salvos are "sunk" 
      @game.salvos.ours.map(&:sunk).uniq.count.should eq(1)
      @game.salvos.ours.map(&:sunk).uniq.first.should eq("Destroyer")
    end
    
    it "should update related salvo shots if one sinks a salvo even if more than needed exist on same line, in y dir" do
      @game.salvos.fire(1,3, "hit")                    
      @game.salvos.fire(9,3, "hit")                    
      @game.salvos.fire(4,3, "hit")                    
      @game.salvos.fire(5,3, "hit")                    
      @game.salvos.fire(6,3, "hit", "Destroyer")                    
      @game.salvos.last.sunk.should eq("Destroyer")
      # make sure all related game salvos are "sunk" 
      @game.salvos.ours.map(&:sunk).uniq.count.should eq(2)
      @game.salvos.ours.map(&:sunk).select{|s| s == "Destroyer"}.count.should eq(3)
      @game.salvos.ours.map(&:sunk).uniq.should include("Destroyer")
      @game.salvos.ours.map(&:sunk).uniq.should include(nil)
    end
    
    it "should update related salvo shots if one sinks a salvo even if we have to pick between right count of xs and ys --- T shape, in y dir" do
      @game.salvos.fire(6,6, "hit")                    
      @game.salvos.fire(6,4, "hit")                    
      @game.salvos.fire(6,1, "hit")                    
      @game.salvos.fire(1,3, "hit")                    
      @game.salvos.fire(9,3, "hit")                    
      @game.salvos.fire(4,3, "hit")                    
      @game.salvos.fire(5,3, "hit")                    
      @game.salvos.fire(6,3, "hit", "Destroyer")                    
      # make sure all related game salvos are "sunk" 
      @game.salvos.ours.map(&:sunk).uniq.count.should eq(2)
      @game.salvos.ours.map(&:sunk).select{|s| s == "Destroyer"}.count.should eq(3)
      @game.salvos.ours.map(&:sunk).uniq.should include("Destroyer")
      @game.salvos.ours.map(&:sunk).uniq.should include(nil)
    end
  end

  it "should fire at the enemy and miss" do
    lambda do
      Salvo.fire(2,3,"miss")
    end.should change(Salvo, :count).by(1)
    Salvo.last.x.should eq(2)
    Salvo.last.y.should eq(3)
    Salvo.last.status.should eq("miss")
    Salvo.last.enemy.should be_false
    Salvo.last.hit.should be_false
  end
  
  it "should fire at the enemy and not miss" do
    lambda do
      Salvo.fire(2,3,"hit")
    end.should change(Salvo, :count).by(1)
    Salvo.last.x.should eq(2)
    Salvo.last.y.should eq(3)
    Salvo.last.status.should eq("hit")
    Salvo.last.enemy.should be_false
    Salvo.last.hit.should be_true
  end
  
  it "should receive fire from the enemy" do
    lambda do
      Salvo.received_enemy_fire(1,2)
    end.should change(Salvo, :count).by(1)
    Salvo.last.x.should eq(1)
    Salvo.last.y.should eq(2)
    Salvo.last.status.should be_nil
    Salvo.last.enemy.should be_true
  end
end
