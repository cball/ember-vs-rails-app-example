class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :title
      t.text :body
      t.references :sender
      t.boolean :read
      t.boolean :deleted, default: false

      t.timestamps null: false
    end
  end
end
