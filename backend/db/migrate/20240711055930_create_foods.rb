class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.references :restaurant, null: false, forein_key: true
      t.string  :name,        null: false
      t.integer :price,       null: false
      t.text    :description, null: false

      t.timestamps
    end
  end
end
