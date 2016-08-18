class SalvoProcessService
  def process(game, x, y, logger = nil)

    state = "miss"

    # Find any intersection ships
    game.ships.mine.at(x,y).each do |ship|
      state = "hit" if ship.intersects?(x, y)
      break if state == "hit"
    end

    Salvo.create({platform45_game_id: game.id, owner: "them", x: x, y: y, state: state ,enemy: true})

    {x: x, y: y, state: state}
  end
end
