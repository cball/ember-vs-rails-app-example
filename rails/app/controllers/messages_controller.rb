class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def show
    @message = Message.find params[:id]
    @message.update_attributes(read: true)
  end
end
