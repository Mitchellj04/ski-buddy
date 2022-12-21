class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :image_url
      t.integer :number_trails
      t.integer :number_lifts
      t.integer :elevation
      t.float :average_cost

      t.timestamps
    end
  end
end
