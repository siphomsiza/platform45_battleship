class Game < ApplicationRecord

  belongs_to :player,
  class_name: "Player",
  foreign_key: :player_id
  validates :p45_game_id,:player_id ,presence: true

  has_many :salvos, class_name: "Salvo",foreign_key: :platform45_game_id, dependent: :destroy
  has_many :ships, class_name: "Ship",foreign_key: :platform45_game_id, dependent: :destroy

  after_create :create_ships

  def ship_name_sink(name)
    ship_to_sink = ships.alive.where(:name => name).first
    ship_to_sink.sink! if ship_to_sink
  end

  def move_game(coords={})
    unless game_status
      if x = coords[:x] and y = coords[:y]
        nuke(x,y)
      else
        nuke(*salvos.next_shot)
      end
    end
  end

  def nuke(x,y)
    params = {:id => p45_game_id, :x => x.to_i, :y => y.to_i}
    resp = CreateGameService.new.nuke(params, Rails.logger)
    if resp.code.to_i == 200
      data = JSON.parse(resp.body)
      salvos.fires_status(x,y,data["status"],data["sunk"]) if data["status"]
      salvos.received_enemy_fire(data["x"], data["y"]) if data["x"] and data["y"]
      # update game status when needed
      update_attribute(:game_status, data["game_status"]) if data["game_status"]
      update_attribute(:game_status, data["prize"]) if data["prize"]
    else
      raise "Error nuking: #{resp.body}"
    end
  end

  def game_over?
    !game_status.blank?
  end

  def create_ships
    [{"Carrier"     => 5}, {"Battleship" => 4}, {"Destroyer"   => 3},
     {"Submarine"   => 2}, {"Submarine"  => 2}, {"Patrol Boat" => 1},
     {"Patrol Boat" => 1}].each do |ship_info|
      ships.create!(:name => ship_info.keys.first, :length => ship_info.values.first)
    end
  end

end
