require 'spec_helper'
require 'byebug'
require './app/services/create_game_service'

describe Game do
  let(:game) {create(:game)}

  #Respond to relationgame has one profile
  it { expect(game).to respond_to :ships }
  it { expect(game).to respond_to :salvos }

  #Respond to attributes
  context "attrs for player profile" do
    it { expect(game).to respond_to :p45_game_id }
    it { expect(game).to respond_to :player_id }
    it { expect(game).to respond_to :game_status }
  end

  it "should be able to sink a game" do
    expect(game.ships.sunk.count).to eq(0)
    expect(game.ships.theirs.count).to eq(0)
    expect(game.ships.mine.count).to eq(0)
    expect(game.ship_name_sink("Battleship")).to eq(true)
    expect(game.ships.sunk.count).to eq(1)
    expect(game.ships.alive.count).to eq(6)
    expect(game.ship_name_sink("Submarine")).to eq(true)
    expect(game.ships.sunk.count).to eq(2)
    expect(game.ships.alive.count).to eq(5)
    expect(game.ship_name_sink("Submarine")).to eq(true)
    expect(game.ships.sunk.count).to eq(3)
    expect(game.ships.alive.count).to eq(4)
    expect(game.ships.sunk.count).to eq(3)
    expect(game.ships.alive.count).to eq(4)
    expect(game.ships.sunk.count).to eq(3)
    expect(game.ships.alive.count).to eq(4)
  end

  it "should have a fleet when created" do
    # should have 7 games in the fleet now
    expect(game.ships.count).to eq(7)

    # make sure some of our game names show up
    expect(game.ships.map(&:name)).to include "Submarine"
    expect(game.ships.map(&:name)).to include "Battleship"
    expect(game.ships.map(&:name).select{|n| n == "Submarine"}.size).to eq(2)
    expect(game.ships.map(&:name).select{|n| n == "Patrol Boat"}.size).to eq(2)
  end

  it "should have first enemy fire after registration" do
    game.salvos.received_enemy_fire(3, 5)
    expect(game.salvos.count).to eq(1)
    expect(game.salvos.first.enemy?).to eq(true)
  end

  it "should nuke p45 and hit" do
    # when we nuke, we also get nuked, so change of 2 in count
    game.salvos.received_enemy_fire(3, 5)
    expect(game.salvos.last.enemy).to eq(true) # the last one should be what the enemy did
    expect(game.salvos.last.x).to eq(3)
    expect(game.salvos.last.y).to eq(5)
  end
end
