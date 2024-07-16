class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_then: 0 }

  def save_with_update_line_foods!(line_foods)
    ActiveRecord::Base.transaction do
      line_foods.each do |line_food|
        line_food.update!(active: false, order: salf)
      end
      salf.save!
    end
  end
end
