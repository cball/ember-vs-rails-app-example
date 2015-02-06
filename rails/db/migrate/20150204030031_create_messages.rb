class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :subject
      t.text :body
      t.string :to
      t.string :from
      t.boolean :read, default: false
      t.boolean :deleted, default: false

      t.timestamps null: false
    end
  end
end
