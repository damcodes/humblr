class UsersController < ApplicationController

  def index 
    users = User.all 
    render json: UserSerializer.new(users).serialize 
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user).serialize 
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: UserSerializer.new(user).serialize
    else
      render json: user.errors.full_messages
    end
  end

  def update
    user = User.find_by(id: params[:id])
    user.update(user_params)
    render json: UserSerializer.new(user).serialize
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    render json: UserSerializer.new(user).serialize
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :first_name, :last_name, :bio)
  end

end
