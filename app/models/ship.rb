class Ship < ApplicationRecord
  scope :mine, -> { where(:owner => "me") }
  scope :theirs, -> {where(:owner => "them")}
  scope :active, -> {where(:state => "active")}
  scope :sunk, -> {where(:state => "sunk")}
  # scope :at, lambda { |x,y| where("x = ? OR y = ?", x, y)}
  scope :at, -> (x, y) { where("x = ? OR y = ?", x, y) }
end
