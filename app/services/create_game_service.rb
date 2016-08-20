include Platform45
require './lib/platform45/api_request'
require './lib/platform45/api_response'

class CreateGameService < ServiceBase
  def create_ship_record(game_id, placement)
    s = Platform45Ship.new({platform45_game_id: game_id, name: placement[:name], owner: "me", x: placement[:x], y: placement[:y], orientation: placement[:orientation]})
    s.save
    duplicate_ship s
  end

  def duplicate_ship(ship, owner = "them")
    s2 = ship
    s2.id = nil
    s2.owner = owner
    s2.save
  end

  def failed_response(game, api_response)
    raise api_response.error.inspect
    ServiceResponse.new(api_response.error)
  end

  def intialize
  end

  def place_ships(game_id)
    g = Game.new({board_size: 10})

    g.place_my_ships.each { |placement| create_ship_record game_id, placement }
  end

  def process(current_player, logger = nil)
    game = Game.new
    game.player = current_player
    # registration for player to Platform 45 Api
    api_response = ::Platform45::APIRequest.new.register(current_player.name, current_player.email)

    if logger
      logger.debug "API Response: #{api_response.inspect}"
    end

    api_response.success? ? successful_response(game, api_response) : failed_response(game, api_response)
  end

  def successful_response(game, api_response)
    game.p45_game_id = api_response.game_id
    game.save
    #place_ships game.id
    x, y = *api_response.coordinates
    SalvoProcessService.new.process game, x.to_i, y.to_i
    game
  end

  def nuke(params, logger = nil)
    api_response = ::Platform45::APIRequest.new.nuke(params)
    if logger
      logger.debug "API Response: #{api_response.inspect} for nuke"
    end
    api_response
  end
end
