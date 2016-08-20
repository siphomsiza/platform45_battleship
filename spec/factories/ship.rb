FactoryGirl.define do
  factory :ship do
    association(:game)
    name {"Battleship"}
    state {"active"}
    length {5}
    sunk {false}
  end
end
