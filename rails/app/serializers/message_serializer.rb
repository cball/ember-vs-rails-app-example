class MessageSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :subject, :body, :read, :deleted, :created_at
  has_one :sender
  has_one :recipient
end
