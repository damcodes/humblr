Post.destroy_all
Follow.destroy_all
User.destroy_all
Comment.destroy_all


user1 = User.create(username: "user1", email: "email@email.com", first_name: "David", last_name: "Molina")
user2 = User.create(username: "user2", email: "example@email.com", first_name: "Eric", last_name: "Smith")
user3 = User.create(username: "user3", email: "email@example.com", first_name: "Mohammed", last_name: "H.")
user4 = User.create(username: "therock", email: "therock@wwe.com", first_name: "Dwayne", last_name: "Johnson", profile_pic_url: "https://www.cbs17.com/wp-content/uploads/sites/29/2020/09/5a4bdcff390942869a5b4ad52e7e5e5d-1.jpg?w=2560&h=1440&crop=1")
user5 = User.create(username: "dom", email: "toretto@cars.com", first_name: "Dominic", last_name: "Toretto", profile_pic_url: "https://openpsychometrics.org/tests/characters/test-resources/pics/FF/1.jpg")
user6 = User.create(username: "letty", email: "baddiee@cars.com", first_name: "Letty", last_name: "Ortiz", profile_pic_url: "https://vignette.wikia.nocookie.net/jp-ultimate-alliance/images/e/e6/95a283ec92afe32084a1836286c34d54b302411a.jpg/revision/latest/top-crop/width/360/height/450?cb=20190725104517")
user7 = User.create(username: "mia", email: "sistertorettor@cars.com", first_name: "Mia", last_name: "Toretto", profile_pic_url: "https://img1.looper.com/img/gallery/the-reason-mia-torettos-role-in-fast-and-furious-9-is-such-a-big-deal/intro-1581341614.jpg")

follow1 = Follow.create(follower_id: user1.id, followee_id: user2.id)
follow2 = Follow.create(follower_id: user3.id, followee_id: user1.id) 
follow3 = Follow.create(follower_id: user2.id, followee_id: user3.id)
follow4 = Follow.create(follower_id: user1.id, followee_id: user3.id)
follow5 = Follow.create(follower_id: user1.id, followee_id: user4.id)
follow6 = Follow.create(follower_id: user1.id, followee_id: user5.id)
follow7 = Follow.create(follower_id: user1.id, followee_id: user6.id)

post1 = Post.create(img_url: "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg", title: "Title 1", content: "This is the first post", user_id: user1.id)
post2 = Post.create(img_url: "https://images.immediate.co.uk/production/volatile/sites/4/2014/11/GettyImages-182457909-f1e4c7a.jpg?quality=90&crop=7px,111px,925px,398px&resize=960,413", title: "Title 2", content: "This is Eric's first post", user_id: user2.id)
post3 = Post.create(img_url: "https://relaunch.sonova.com/cdn/ff/-6ughzIH0jAAtvVW45hWwlrxQYUbhYVEcMBxb4dHt7I/1595638191/public/styles/header_image_tablet/public/2019-07/shutterstock_253580635_square.jpg?itok=TwBeTHTY", title: "Title 3", content: "This is Mohammed's first post", user_id: user3.id)
post4 = Post.create(img_url: "https://media.istockphoto.com/photos/close-up-of-colorful-keelbilled-toucan-bird-picture-id511523232?k=6&m=511523232&s=612x612&w=0&h=TTGhQHDpEqeXZtSpYh-7LeK8RcjO3FFDtgYR3Ja1ous=", title: "Tucan", content: "What a beatiful, majestic Tucan!", user_id: user1.id)
post5 = Post.create(img_url: "https://images.theconversation.com/files/243439/original/file-20181101-83635-1xcrr39.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop", title: "Post 2", content: "This is Eric's second Post", user_id: user2.id)
post6 = Post.create(img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1528752401.jpg", title: "Prepare for Pain", content: "This is my favorite vehicle for running over bad guys", user_id: user4.id)
post7 = Post.create(img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-07-12-at-2-06-23-pm-2-1562954848.png?crop=0.583xw:0.689xh;0,0.311xh&resize=1200:*", title: "Daddy's Car", content: "You almost had me? You never had me - you never had your car. Granny shifting, not double clutching like you should. You're lucky that 100-shot of NOS didn't blow the welds on the intake. Almost had me? Now me and the mad scientist are going to have to rip apart the block, and replace the piston rings you fried. Ask any racer, any real racer. It don't matter if you win by an inch or a mile. Winning's winning.", user_id: user5.id)
post8 = Post.create(img_url: "https://static.wikia.nocookie.net/fastandfurious/images/a/a3/Letty%27s_Nissan_240SX.jpg/revision/latest?cb=20160118065937", title: "'97 Nissan", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", user_id: user7.id)

comment1 = Comment.create(content: "This is a really cool post!", post_id: post2.id, user_id: user1.id)
comment2 = Comment.create(content: "Awesome post!", post_id: post2.id, user_id: user3.id)
comment3 = Comment.create(content: "Eh, this is okay.", post_id: post1.id, user_id: user3.id)
comment4 = Comment.create(content: "I think this is super cool", post_id: post1.id, user_id: user2.id)