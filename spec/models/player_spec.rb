require 'spec_helper'
require 'byebug'

describe Player do
  let(:player) {create(:player)}

  #Respond to relationship has one profile
  it { expect(player).to respond_to :games }

  #Respond to attributes
  context "attrs for player profile" do
    it { expect(player).to respond_to :name }
    it { expect(player).to respond_to :email }
  end

  context "validations" do
    it "validates player not valid" do
      player.email = nil
      expect(player).not_to be_valid

      player.password = ''
      expect(player).not_to be_valid
    end

    it "should be valid" do
      expect(player).to be_valid
    end
  end
end
