Post.destroy_all
Follow.destroy_all
User.destroy_all
Comment.destroy_all


user1 = User.create(username: "user1", email: "email@email.com", first_name: "David", last_name: "Molina")
user2 = User.create(username: "user2", email: "example@email.com", first_name: "Eric", last_name: "Smith")
user3 = User.create(username: "user3", email: "email@example.com", first_name: "Mohammed", last_name: "H.")

follow1 = Follow.create(follower_id: user1.id, followee_id: user2.id)
follow2 = Follow.create(follower_id: user3.id, followee_id: user1.id)
follow3 = Follow.create(follower_id: user2.id, followee_id: user3.id)

post1 = Post.create(img_url: "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg", title: "Title 1", content: "This is the first post", user_id: user1.id)
post2 = Post.create(img_url: "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg", title: "Title 2", content: "This is Eric's first post", user_id: user2.id)
post3 = Post.create(img_url: "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg", title: "Title 3", content: "This is Mohammed's first post", user_id: user3.id)
post4 = Post.create(img_url: "https://media.istockphoto.com/photos/close-up-of-colorful-keelbilled-toucan-bird-picture-id511523232?k=6&m=511523232&s=612x612&w=0&h=TTGhQHDpEqeXZtSpYh-7LeK8RcjO3FFDtgYR3Ja1ous=", title: "Tucan", content: "What a beatiful, majestic Tucan!", user_id: user1.id)

comment1 = Comment.create(content: "This is a really cool post!", post_id: post2.id, user_id: user1.id)
comment2 = Comment.create(content: "Awesome post!", post_id: post2.id, user_id: user3.id)
comment3 = Comment.create(content: "Eh, this is okay.", post_id: post1.id, user_id: user3.id)
comment4 = Comment.create(content: "I think this is super cool", post_id: post1.id, user_id: user2.id)