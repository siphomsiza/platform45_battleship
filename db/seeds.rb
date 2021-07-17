# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do |n|
  n = n + 1
  user = Player.new(name: "Testing #{n}" ,email: "testing#{n}@sableassets.co.za")
  user.password = "surveyn0tn0w"
  user.password_confirmation = "surveyn0tn0w"
  user.save!
end
