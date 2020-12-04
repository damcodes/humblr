class LikesController < ApplicationController

  def create
    post = Post.find_by(id: params[:post_id])
    like = Like.create(likes_params)
    render json: PostSerializer.new(post).serialize
  end

  def destroy
  end

  private

  def likes_params
    params.require(:like).permit(:post_id, :user_id)
  end

end