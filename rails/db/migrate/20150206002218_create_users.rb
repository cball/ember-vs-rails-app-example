class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
    end

    change_table :messages do |t|
      t.remove :to, :from
      t.references :sender
      t.references :recipient
    end
  end
end
