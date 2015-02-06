class WelcomeController < ApplicationController
  def index
  end

  def profile
    @user = User.find 1
  end
end
