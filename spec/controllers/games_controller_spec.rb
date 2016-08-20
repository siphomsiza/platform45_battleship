require 'spec_helper'
 # include Devise::Test::ControllerHelpers
require 'shared/rest_api_controller'

describe GamesController do
  context "CRUD actions as part of a company" do
    before (:each) do
      player = FactoryGirl.create(:player)
      sign_in(player)
      @subject = create(:game, :player => player,:p45_game_id=> 1234)
      @built_subject = build(:game, :player => player)
      @params = {:format => :html ,id: @subject.id}

    end
    it_behaves_like "REST API controller"
  end

end
