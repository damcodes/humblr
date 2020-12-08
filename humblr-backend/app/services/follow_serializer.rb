class FollowSerializer

  def initialize(follow_obj) 
    @follow = follow_obj
  end

  def serialize 
    options = {
      except: [:created_at, :updated_at]
    }
    @follow.to_json(options)
  end

end