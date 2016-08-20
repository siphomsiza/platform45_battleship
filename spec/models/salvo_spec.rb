require 'spec_helper'

describe Salvo do
  describe "Game Related" do
    let(:salvo) {create(:salvo)}

    #Respond to relationship has one profile
    it { expect(salvo).to respond_to :game }

    #Respond to attributes
    context "attrs for ship" do
      it { expect(salvo).to respond_to :owner }
      it { expect(salvo).to respond_to :state }
      it { expect(salvo).to respond_to :x }
      it { expect(salvo).to respond_to :y }
      it { expect(salvo).to respond_to :state }
      it { expect(salvo).to respond_to :error }
      it { expect(salvo).to respond_to :enemy }
      it { expect(salvo).to respond_to :hit }
    end

    # it "should know the next surrounding coords for all our hit (non sunk) salvos" do
    #   Salvo.send(:fires_status,3,4,"hit")
    #   Salvo.send(:fires_status,6,8,"hit")
    #   expect(Salvo.send(:all_coordinates)).to eq([[4,4],[2,4],[3,5],[3,3],[7,8],[5,8],[6,9],[6,10]])
    # end

    it "should know the next best shot" do
      Salvo.send(:fires_status,3,4,"hit")
      expect(Salvo.send(:next_shot)).not_to eq([1,1])
    end

    it "should have an available coord count of 95 after a mixture of hits" do
      Salvo.send(:fires_status,3,4,"hit")
      Salvo.send(:fires_status,3,5,"miss")
      Salvo.send(:fires_status,3,6,"miss")
      Salvo.send(:fires_status,3,7,"miss")
      Salvo.send(:fires_status,3,8,"hit")
      Salvo.send(:fires_status,3,8,"hit")
      expect(Salvo.available_coordinates.count).to eq(100)
      expect(Salvo.available_coordinates).not_to match_array([3,4])
      expect(Salvo.available_coordinates).not_to match_array([3,5])
      expect(Salvo.available_coordinates).not_to match_array([3,6])
      expect(Salvo.available_coordinates).not_to match_array([3,7])
      expect(Salvo.available_coordinates).not_to match_array([3,8])
    end

    it "should update related salvo shots if one sinks a salvo" do
      s = Salvo.send(:fires_status,3,4,"hit")
      s.game = salvo.game
      s.save
      expect(Salvo.send(:ours).count).to eq(1)
      expect(Salvo.send(:ours).last.sunk).to eq(nil)
      f = Salvo.send(:fires_status,3,6,"hit","Destroyer")
      f.game = salvo.game
      f.save
      expect(Salvo.send(:ours).last.sunk).to eq("Destroyer")
      # make sure all related game salvos are "sunk"
      expect(Salvo.send(:ours).map(&:sunk).uniq.count).to eq(2)
      expect(Salvo.send(:ours).map(&:sunk).uniq.last).to eq("Destroyer")
    end

    it "should update related salvo shots if one sinks a salvo even if more than needed exist on same line" do
      one = Salvo.send(:fires_status,3,1,"hit")
      one.game = salvo.game
      one.save

      two = Salvo.send(:fires_status,3,9,"hit")
      two.game = salvo.game
      two.save

      three = Salvo.send(:fires_status,3,4,"hit")
      three.game = salvo.game
      three.save

      four = Salvo.send(:fires_status,3,5,"hit")
      four.game = salvo.game
      four.save

      five = Salvo.send(:fires_status,3,6,"hit", "Destroyer")
      five.game = salvo.game
      five.save

      expect(salvo.game.salvos.last.sunk).to eq("Destroyer")
      # make sure all related game salvos are "sunk"
      expect(Salvo.send(:ours).map(&:sunk).uniq.count).to eq(2)
      expect(Salvo.send(:ours).map(&:sunk).select{|s| s == "Destroyer"}.count).to eq(3)
      expect(Salvo.send(:ours).map(&:sunk).uniq).to include("Destroyer")
      expect(Salvo.send(:ours).map(&:sunk).uniq).to include(nil)
    end
  end
end
