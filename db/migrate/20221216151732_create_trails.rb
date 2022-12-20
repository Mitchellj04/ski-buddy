class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :trail_name
      t.string :difficulty
      t.boolean :groomed
      t.integer :mountain_id
      t.timestamps
    end
  end
end
