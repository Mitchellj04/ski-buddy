class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :description
      t.float :rating
      t.integer :user_id

      t.timestamps
    end
  end
end
