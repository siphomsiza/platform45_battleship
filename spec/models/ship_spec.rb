require 'spec_helper'

describe Ship do
  it "should be sinkable" do
    ship = Ship.create(:name => "Test", :length => 2)
    ship.sunk.should be_false
    ship.sink!
    ship.sunk.should be_true
  end
end
