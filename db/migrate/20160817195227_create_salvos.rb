class CreateSalvos < ActiveRecord::Migration[5.0]
  def change
    create_table :salvos do |t|
      t.integer :platform45_game_id
      t.string :owner
      t.integer :x
      t.integer :y
      t.string :state
      t.string :status
      t.string :error
      t.boolean :enemy, :default => false
      t.boolean :hit, :default => false
      t.string :sunk
      t.timestamps
    end
  end
end
