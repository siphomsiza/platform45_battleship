class Player < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable

  #relationships
  has_many :games,
  class_name: "Game",
  foreign_key: :player_id,
  dependent: :destroy

  validates :name,:email,presence: true

  def to_s
    name
  end
end
