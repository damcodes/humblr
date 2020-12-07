class PostSerializer 

  def initialize(post_obj)
    @post = post_obj
  end

  def serialize
    options = {
      include: {
        comments: { except: [:created_at, :updated_at] }
      },
      except: [:updated_at]
    }
    @post.to_json(options)
  end

end