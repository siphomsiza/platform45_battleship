class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :p45_game_id
      t.string :game_status
      t.belongs_to :player
      t.timestamps
    end
  end
end
