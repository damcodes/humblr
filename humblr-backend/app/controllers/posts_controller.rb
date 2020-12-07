class PostsController < ApplicationController

  def show
    post = Post.find_by(id: params[:id])
    render json: PostSerializer.new(post).serialize
  end

  def create
    post = Post.new(post_params)
    if post.save 
      render json: PostSerializer.new(post).serialize
    end
  end

  def update
    post = Post.find_by(id: params[:id])
    post.update(post_params)
    render json: PostSerializer.new(post).serialize
  end

  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy
    render json: PostSerializer.new(post).serialize
  end

  private
  def post_params
    params.require(:post).permit(:title, :img_url, :content, :likes, :user_id)
  end

end
