require 'spec_helper'

describe Ship do
  let(:ship) {create(:ship)}

  #Respond to relationship has one profile
  it { expect(ship).to respond_to :game }

  #Respond to attributes
  context "attrs for ship" do
    it { expect(ship).to respond_to :name }
    it { expect(ship).to respond_to :state }
    it { expect(ship).to respond_to :length }
    it { expect(ship).to respond_to :sunk }
  end

  it "should be sinkable" do
    expect(ship.sunk).to eq(false)
    ship.sink!
    expect(ship.sunk).to eq(true)
  end
end
