function fetchUser(session) {
  let userId = session.user_id
  fetch(`http://localhost:3000/users/${userId}`).then( 
    res => res.json() 
  ).then( 
    user => {
      renderUserHome(user)
      const navBar = document.querySelector("nav")
      navBar.addEventListener("click", e => { 
        const isButton = e.target.nodeName === "BUTTON"
        if (!isButton) {
          return
        }
        const choice = e.target
        if (choice.innerText === "Delete Account") {
          deleteUser(user)
        }
      })
    }
  )
}

function renderUserHome(userObj) {
  const navBar = document.querySelector("nav")
  removeAllChildren(navBar)
  const loginBox = document.querySelector("div.loginBox")
  loginBox.remove()
  newMenu(navBar, "Delete Account")
  const main = document.querySelector("main")
  const welcomeUserHeader = document.createElement("h2")
  welcomeUserHeader.innerText = `Welcome ${userObj.first_name}`
  main.appendChild(welcomeUserHeader)
}

function newMenu(navBar) {
  let args = Array.prototype.slice.call(arguments, 1)
  args.forEach(navOptionText => {
    const newNavBtn = document.createElement("button")
    newNavBtn.innerText = navOptionText
    navBar.appendChild(newNavBtn)
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
  }).then( res => res.json() ).then( user => {
    console.log(user)
    setTimeout(renderPage, 2500)
  })
}