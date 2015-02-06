module Api
  class MessagesController < BaseController

    # obviously, this is not secure enough for real life
    def index
      messages = Message.where(recipient_id: params[:user_id])
      render json: messages
    end

    def show
      message = Message.find params[:id]
      render json: message
    end

    def update
      message = Message.find params[:id]
      message.read = params[:message][:read]
      message.save

      render json: message
    end
  end

end
