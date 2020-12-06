class PostsController < ApplicationController

  def show
    post = Post.find_by(id: params[:id])
    render json: PostSerializer.new(post).serialize
  end

  def create
  end

  def update
    post = Post.find_by(id: params[:id])
    post.update(post_params)
    render json: PostSerializer.new(post).serialize
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:title, :img_url, :content, :likes)
  end

end
