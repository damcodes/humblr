function fetchAndRenderUserHome(user) {
  let userId = user.id
  fetch(`http://localhost:3000/users/${userId}`).then( 
    res => res.json() 
  ).then( 
    user => {
      renderUserHome(user)
      handleNavClicks(user)
    }
  )
}
function renderUserHome(userObj) {
  const navBar = document.querySelector("nav")
  removeAllChildren(navBar)
  const loginBox = document.querySelector("div.loginBox")
  if (loginBox) {
    loginBox.remove()
  }
  newMenu(navBar, "Dashboard", "New Post", "My Profile", "Edit Profile", "Delete Profile", "Log Out")

  renderUserInfo(userObj)
  renderThisUserPosts(userObj)
  handleNavClicks(userObj)
}

function renderUserInfo(userObj) {
  const main = document.querySelector("main")
  const userInfoContainer = document.createElement("div")
  userInfoContainer.className = "user-info-container"         //create container for user data 
  const userInfoCard = document.createElement("div")
  userInfoCard.className = "user-info-card"                   //create card for user data within container
  const userProfilePic = document.createElement("img")
  userProfilePic.src = userObj.profile_pic_url             
  userInfoCard.appendChild(userProfilePic)                    //append profile pic to user card
  const usernameLabel = document.createElement("p")
  usernameLabel.className = "user-info-card-label"
  usernameLabel.innerText = "Username"
  userInfoCard.appendChild(usernameLabel)                     //append username label to user card
  const username = document.createElement("p")
  username.className = "user-info-card-attribute"
  username.innerText = userObj.username
  userInfoCard.appendChild(username)                          //append username to user card
  const fullNameLabel = document.createElement("p")
  fullNameLabel.className = "user-info-card-label"
  fullNameLabel.innerText = "Name"
  userInfoCard.appendChild(fullNameLabel)                     //append name label to user card
  const fullName = document.createElement("p")
  fullName.className = "user-info-card-attribute"
  fullName.innerText = `${userObj.first_name} ${userObj.last_name}`
  userInfoCard.appendChild(fullName)                          //append full name to user card
  const bioLabel = document.createElement("p")
  bioLabel.className = "user-info-card-label"
  bioLabel.innerText = "Bio"
  userInfoCard.appendChild(bioLabel)                          //append bio label to user card
  const bio = document.createElement("p")
  bio.className = "user-info-card-attribute"
  bio.innerText = userObj.bio
  userInfoCard.appendChild(bio)                               //append bio to user card
  userInfoContainer.appendChild(userInfoCard)                 //append populated user card to card container
  const welcomeUserHeader = document.createElement("h2")
  welcomeUserHeader.innerText = `Welcome ${userObj.first_name}`
  main.appendChild(welcomeUserHeader)
  main.appendChild(userInfoContainer)
}

function handleNavClicks(user) {
  const navBar = document.querySelector("nav")
  navBar.addEventListener("click", e => { 
    const choice = e.target
    const main = document.querySelector("main")
    const isButton = choice.nodeName === "BUTTON"
    if (!isButton) {
      return
    }
    if (choice.innerText === "Delete Profile") {
      deleteUser(user)
    } else if (choice.innerText === "Log Out") {
      removeAllChildren(main)
      removeAllChildren(navBar)
      renderLanding()                                   //landing.js
    } else if (choice.innerText === "Edit Profile") {
      removeAllChildren(main)
      removeAllChildren(navBar)
      editProfile(user)                                 //edit_profile.js
    } else if (choice.innerText === "Dashboard") {
      removeAllChildren(main)
      renderDashboard(user)                             //dashboard.js
    } else if (choice.innerText === "My Profile") {
      removeAllChildren(main)
      renderUserHome(user)
    } else if (choice.innerText == "New Post") {
      removeAllChildren(main)
      renderNewPostForm(user)
    }
  })
}

function newMenu(navBar) {
  let args = Array.prototype.slice.call(arguments, 1)
  args.forEach(navOptionText => {
    const newNavBtn = document.createElement("button")
    newNavBtn.innerText = navOptionText
    navBar.appendChild(newNavBtn)
  })
}

function renderThisUserPosts(user) {
  const main = document.querySelector("main")
  const insertAt = main.querySelector("div.user-info-container")
  if (!document.querySelector("#posts-header")) {
    const postsHeader = document.createElement("h3")
    postsHeader.id = "posts-header"
    postsHeader.innerText = "Your Posts"
    main.insertBefore(postsHeader, insertAt.nextElementSibling)
  }
  const sortedPosts = user.posts.sort((x,y) => x.created_at - y.created_at)
  sortedPosts.forEach(post => {
    fetch(`http://localhost:3000/posts/${post.id}`)
    .then( res => res.json() )
    .then( post => {
      const deletePostBtn = document.createElement('button')
      deletePostBtn.innerText = "Delete Post"
      deletePostBtn.id = "delete-post-button"
      showPost(post, deletePostBtn)                   //show_post.js
    })                           
  })
  
}

function deleteUser(user) {
  const main = document.querySelector("main")
  removeAllChildren(main)
  const navBar = document.querySelector("nav")
  removeAllChildren(navBar)
  const deleteDiv = document.createElement("div")
  deleteDiv.id = "delete-message-div"
  const deleteMessageH2 = document.createElement("h2")
  deleteMessageH2.innerText = "Your account has been destroyed."
  const goodbyeUserH3 = document.createElement("h3")
  goodbyeUserH3.innerText = `Goodbye, ${user.first_name}.` 

  deleteDiv.appendChild(deleteMessageH2)
  deleteDiv.appendChild(goodbyeUserH3)

  main.appendChild(deleteDiv)

  fetch(`http://localhost:3000/users/${user.id}`, {
    method: "DELETE"
  })
  .then( res => res.json() )
  .then( user => {
    console.log(user)
    setTimeout(renderLanding, 2500) // landing.js
  })
}