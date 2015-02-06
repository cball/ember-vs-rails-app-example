class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :image, :links

  def links
    {
      messages: "/api/messages?user_id=#{object.id}"
    }
  end
end
