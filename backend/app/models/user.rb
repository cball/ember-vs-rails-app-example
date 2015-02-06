class User < ActiveRecord::Base
  has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id'
  has_many :messages, class_name: 'Message', foreign_key: 'recipient_id'

  def name
    "#{first_name} #{last_name}"
  end
end
