class Restaurant < ApplicationRecord
  DEFAULT_NAME_LENGTH = 30

  has_many :foods
  has_many :line_foods, through: :food

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: DEFAULT_NAME_LENGTH }
  validates :fee,  numericality: { greater_then: 0 }
end
