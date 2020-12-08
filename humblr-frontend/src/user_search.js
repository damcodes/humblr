function searchUser(followerUser) {
  const main = document.querySelector("main")
  const searchContainer = document.createElement("div")
  searchContainer.className = "form-container"
  main.appendChild(searchContainer)

  const searchFormCard = document.createElement("div")
  searchFormCard.className = "form-card"
  searchContainer.appendChild(searchFormCard)
  
  const searchHeader = document.createElement("h2")
  searchHeader.innerText = "Search a User"
  searchFormCard.appendChild(searchHeader)

  const searchForm = document.createElement("form")
  searchFormCard.appendChild(searchForm)
  
  const usernameInput = document.createElement('input')
  usernameInput.className = "form-input"
  usernameInput.id = "username"
  usernameInput.placeholder = "Username"
  searchForm.appendChild(usernameInput)
  searchForm.appendChild(document.createElement('br'))

  const firstNameInput = document.createElement("input")
  firstNameInput.className = "form-input"
  firstNameInput.id = 'first-name'
  firstNameInput.placeholder = 'First Name'
  searchForm.appendChild(firstNameInput)
  searchForm.appendChild(document.createElement('br'))

  const lastNameInput = document.createElement('input')
  lastNameInput.className = 'form-input'
  lastNameInput.id = 'last-name'
  lastNameInput.placeholder = "Last Name"
  searchForm.appendChild(lastNameInput)
  searchForm.appendChild(document.createElement('br'))
  searchForm.appendChild(document.createElement('br'))

  const submitBtn = document.createElement("input")
  submitBtn.type = 'submit'
  submitBtn.value = 'Find User'
  searchForm.appendChild(submitBtn)

  searchForm.addEventListener("submit", e => {
    e.preventDefault()
    removeAllChildren(main)
    const form = e.target
    const username = form.querySelector("#username").value
    const firstName = form.querySelector("#first-name").value
    const lastName = form.querySelector("#last-name").value
    fetch(`http://localhost:3000/users`)
    .then( res => res.json() )
    .then( users => {
      const searchedUser = users.find( user => (user.username === username && 
                                                user.first_name === firstName && 
                                                user.last_name === lastName))
      console.log(searchedUser)
      renderUser(searchedUser, followerUser)
    })
  })
}

function renderUser(followee, follower) {
  const main = document.querySelector("main")
  main.appendChild(document.createElement("br"))
  const userContainer = document.createElement("div")
  userContainer.className = 'user-info-container'
  main.appendChild(userContainer)

  const userCard = document.createElement("div")
  userCard.className = "user-info-card"
  userCard.id = 'user-search-card'
  userContainer.appendChild(userCard)

  const profilePic = document.createElement("img")
  profilePic.className = 'post-image'
  profilePic.src = followee.profile_pic_url
  userCard.appendChild(profilePic)
  userCard.appendChild(document.createElement("br"))

  const username = document.createElement("p")
  username.className = 'form-input'
  username.id = 'username-follow'
  username.innerText = followee.username
  userCard.appendChild(username)

  const bio = document.createElement("p")
  bio.className = 'user-info-card-attribute'
  bio.innerText = followee.bio
  userCard.appendChild(bio)

  const followBtn = document.createElement("button")
  followBtn.innerText = "Follow"
  followBtn.id = 'follow-button'
  userCard.appendChild(followBtn)

  followBtn.addEventListener("click", () => {
    const followeeId = followee.id
    const followerId = follower.id
    if (followBtn.innerText === "FOLLOW") {
      removeAllChildren(main)
      persistFollow(followeeId, followerId, "post")
      renderDashboard(follower)
    } //else if (followBtn.innerText === "UNFOLLOW") {
    //   removeAllChildren(main)
    //   persistFollow(followeeId, followerId, follower, "delete")
    //   fetchAndRenderUserHome(follower)
    // }
  })
}

function persistFollow(followeeId, followerId, request) {
  if (request === "post") {
    fetch(`http://localhost:3000/follows`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        followee_id: followeeId,
        follower_id: followerId
      })
    })
  } //else if (request === "delete") {
  //   fetch(`http://localhost:3000/follows`)
  //   .then( res => res.json() )
  //   .then( follow => {
  //     fetch(`http://localhost:3000/follows/${follow.id}`, { method: "DELETE" })
  //   })
  // }
}
