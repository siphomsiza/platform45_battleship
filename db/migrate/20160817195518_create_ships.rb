class CreateShips < ActiveRecord::Migration[5.0]
  def change
    create_table :ships do |t|
      t.integer  "platform45_game_id"
      t.string   "owner"
      t.integer  "x"
      t.integer  "y"
      t.string   "orientation"
      t.string   "name"
      t.string   "state",              :default => "active"
      t.integer :length
      t.boolean :sunk, :default => false
      t.timestamps
    end
  end
end
