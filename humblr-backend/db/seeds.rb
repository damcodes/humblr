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
follow4 = Follow.create(follower_id: user1.id, followee_id: user3.id)

post1 = Post.create(img_url: "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg", title: "Title 1", content: "This is the first post", user_id: user1.id)
post2 = Post.create(img_url: "https://images.immediate.co.uk/production/volatile/sites/4/2014/11/GettyImages-182457909-f1e4c7a.jpg?quality=90&crop=7px,111px,925px,398px&resize=960,413", title: "Title 2", content: "This is Eric's first post", user_id: user2.id)
post3 = Post.create(img_url: "https://relaunch.sonova.com/cdn/ff/-6ughzIH0jAAtvVW45hWwlrxQYUbhYVEcMBxb4dHt7I/1595638191/public/styles/header_image_tablet/public/2019-07/shutterstock_253580635_square.jpg?itok=TwBeTHTY", title: "Title 3", content: "This is Mohammed's first post", user_id: user3.id)
post4 = Post.create(img_url: "https://media.istockphoto.com/photos/close-up-of-colorful-keelbilled-toucan-bird-picture-id511523232?k=6&m=511523232&s=612x612&w=0&h=TTGhQHDpEqeXZtSpYh-7LeK8RcjO3FFDtgYR3Ja1ous=", title: "Tucan", content: "What a beatiful, majestic Tucan!", user_id: user1.id)
post = Post.create(img_url: "https://images.theconversation.com/files/243439/original/file-20181101-83635-1xcrr39.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop", title: "Post 2", content: "This is Eric's second Post", user_id: user2.id)

comment1 = Comment.create(content: "This is a really cool post!", post_id: post2.id, user_id: user1.id)
comment2 = Comment.create(content: "Awesome post!", post_id: post2.id, user_id: user3.id)
comment3 = Comment.create(content: "Eh, this is okay.", post_id: post1.id, user_id: user3.id)
comment4 = Comment.create(content: "I think this is super cool", post_id: post1.id, user_id: user2.id)