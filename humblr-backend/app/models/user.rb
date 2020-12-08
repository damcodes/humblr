class User < ApplicationRecord

  has_many :recieved_follows, foreign_key: :followee_id, class_name: "Follow", dependent: :destroy
  has_many :followers, through: :recieved_follows, source: :follower

  has_many :given_follows, foreign_key: :follower_id, class_name: "Follow", dependent: :destroy
  has_many :followings, through: :given_follows, source: :followee
  
  has_many :posts, dependent: :destroy
  has_many :comments, through: :posts

  validates :email, uniqueness: true, presence: true
  validates :username, length: { minimum: 2, maximum: 20}, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

end
