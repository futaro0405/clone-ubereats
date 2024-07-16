class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :food

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: 30 }
  validates :fee,  numericality: { greater_then: 0 }
end
