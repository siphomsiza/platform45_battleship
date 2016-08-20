FactoryGirl.define do
  factory :game do
    association(:player)
    p45_game_id {Faker::Number.between(1, 2000)}
    game_status {}
  end
end
