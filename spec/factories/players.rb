FactoryGirl.define do
  factory :player do
    name {Faker::Name.name()}
    email {Faker::Internet.email()}

    before(:create) do |player|
      pass = Faker::Lorem.words(8)
      player.password = pass
      player.password_confirmation = pass
    end
  end
end
