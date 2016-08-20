FactoryGirl.define do
  factory :salvo do
    association(:game)
    owner {"them"}
    x {3}
    y {4}
    state {"miss"}
    error {}
    enemy {true}
    hit {false}
  end
end
