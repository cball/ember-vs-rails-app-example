class AddImagesToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.column :image, :string
    end
  end
end
