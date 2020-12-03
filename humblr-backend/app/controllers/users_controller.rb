class UsersController < ApplicationController

  def index 
    users = User.all 
    render json: UserSerializer.new(users).serialize 
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user).serialize 
  end

end
