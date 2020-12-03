class PostsController < ApplicationController

  def show
    post = Post.find_by(id: params[:id])
    render json: PostSerializer.new(post).serialize
  end

  def create
  end

  def update
  end

  def destroy
  end
  
end
