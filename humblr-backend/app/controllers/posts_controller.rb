class PostsController < ApplicationController

  def index
    posts = Post.all 
    render json: PostSerializer.new(posts).serialize 
  end

end
