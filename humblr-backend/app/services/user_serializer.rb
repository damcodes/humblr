class UserSerializer
  
  def initialize(user_obj)
    @user = user_obj
  end

  def serialize 
    options = {
      include: {
        posts: {
          include: {
            likes: { except: [:created_at, :updated_at] },
            comments: { except: [:created_at, :updated_at] }
          },
          except: [:created_at, :updated_at, :user_id]
        },  
        followers: { except: [:created_at, :updated_at] },
        followings: { except: [:created_at, :updated_at] }
      },
      except: [:created_at, :updated_at]
    }
    @user.to_json(options)
  end

end