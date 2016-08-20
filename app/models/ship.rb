class Ship < ApplicationRecord
  belongs_to :game,
  class_name: "Game",
  foreign_key: :platform45_game_id

  scope :mine, -> { where(:owner => "me") }
  scope :theirs, -> {where(:owner => "them")}
  scope :active, -> {where(:state => "active")}
  scope :sunk, -> {where(:sunk => true)}
  scope :alive, -> { where(:sunk => false)}
  scope :at, -> (x, y) { where("x = ? OR y = ?", x, y) }

  def sink!
    update_attribute(:sunk, true)
  end
end
