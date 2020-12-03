class User < ApplicationRecord

  has_many :recieved_follows, foreign_key: :followee_id, class_name: "Follow"
  has_many :followers, through: :recieved_follows, source: :follower

  has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
  has_many :followings, through: :given_follows, source: :followee
  
  has_many :posts, dependent: :destroy
  has_many :likes, through: :posts
  has_many :comments, through: :posts
  
end
