class FollowsController < ApplicationController

  def index 
    follows = Follow.all 
    render json: FollowSerializer.new(follows).serialize 
  end

  def create
    follow = Follow.create(follow_params)
    render json: FollowSerializer.new(follow).serialize
  end

  def destroy
  end
  
  private 

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
