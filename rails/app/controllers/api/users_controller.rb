module Api
  class UsersController < BaseController
    def show
      @user = User.find params[:id]
      render json: @user
    end
  end
end
