Post.destroy_all
Like.destroy_all
Follow.destroy_all
User.destroy_all


user1 = User.create(username: "user1", email: "email@email.com", first_name: "David", last_name: "Molina")
user2 = User.create(username: "user2", email: "example@email.com", first_name: "Eric", last_name: "Smith")
user3 = User.create(username: "user3", email: "email@example.com", first_name: "Mohammed", last_name: "H.")

follow1 = Follow.create(follower_id: user1.id, followee_id: user2.id)
follow2 = Follow.create(follower_id: user3.id, followee_id: user1.id)
follow3 = Follow.create(follower_id: user2.id, followee_id: user3.id)

post1 = Post.create(img_url: "url_of_an_img", content: "This is the first post", user_id: user1.id)
post2 = Post.create(img_url: "another_img_url", content: "This is Eric's first post", user_id: user2.id)
post3 = Post.create(img_url: "yet_another_img", content: "This is Mohammed's first post", user_id: user3.id)

like1 = Like.create(post_id: post1.id, user_id: user2.id)
like2 = Like.create(post_id: post2.id, user_id: user1.id)
like3 = Like.create(post_id: post3.id, user_id: user1.id)
like4 = Like.create(post_id: post1.id, user_id: user3.id)

comment1 = Comment.create(content: "This is a really cool post!", post_id: post2.id, user_id: user1.id)
comment2 = Comment.create(content: "Awesome post!", post_id: post2.id, user_id: user3.id)
comment3 = Comment.create(content: "Eh, this is okay.", post_id: post1.id, user_id: user3.id)
comment4 = Comment.create(content: "I think this is super cool", post_id: post1.id, user_id: user2.id)