module Api
  class MessagesController < ApplicationController
    def index
      # obviously, this is not secure enough for real life
      messages = Message.where(recipient_id: params[:user_id])
      render json: messages
    end

    def show
      message = Message.find params[:id]
      render json: message
    end
  end
end
