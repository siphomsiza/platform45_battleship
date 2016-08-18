class HomeController < ApplicationController
  def index
    if params[:game_over]
      game = Game.find(params[:game_over])
      flash.now[:notice] = "You Won ... congrats!" if game.game_status != "lost"
      flash.now[:notice] = "You Lost ... sorry :(" if game.game_status == "lost"
    end
    @games = current_player.games
  end
end
