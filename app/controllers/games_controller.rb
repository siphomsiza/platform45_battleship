class GamesController < ApplicationController
  respond_to :html, :js

  def index
    if params[:game_over]
      game = Game.find(params[:game_over])
      flash.now[:notice] = "You Won ... congrats!" if game.game_status != "lost"
      flash.now[:notice] = "You Lost ... sorry :(" if game.game_status == "lost"
    end
    @games = current_player.games
  end

  def new
    @game = CreateGameService.new.process(current_player, Rails.logger)
    if @game.errors.any?
      flash[:error] = @game.errors.first
      redirect_to new_game_url
    else
      redirect_to game_url(@game)
    end
  end

  def show
    @game = Game.find(params[:id])
    # default to manually
    @manually_play = params[:manually] == "false" ? false : true
    @game.move_game unless @manually_play
  end

  def update_game_grid
    @game = Game.find(params[:id])
    @game.move_game(:x => params[:x], :y => params[:y])
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
    respond_to do |format|
      flash.now[:notice] = "Game is successfully deleted"
      format.html { redirect_to games_url }
    end
  end
end
