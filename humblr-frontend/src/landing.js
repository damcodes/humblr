document.addEventListener("DOMContentLoaded", renderLanding)

function renderLanding() {
  const main = document.querySelector("main")
  removeAllChildren(main)
  const gifContainer = document.createElement('div')
  gifContainer.id = "gif-container"
  main.appendChild(document.createElement("br"))
  main.appendChild(document.createElement("br"))
  main.appendChild(gifContainer)
  const gif = document.createElement("img")
  gif.src = "https://media.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif"
  gif.id = "landing-gif"
  gifContainer.appendChild(gif)
  const navBar = document.querySelector("nav")
  // const navBar = document.createElement("nav")
  const signUpBtn = document.createElement("button")
  signUpBtn.innerText = "Sign Up"
  navBar.appendChild(signUpBtn)
  const loginBtn = document.createElement("button")
  loginBtn.innerText = "Log In"
  navBar.appendChild(loginBtn)

  loginBtn.addEventListener("click", login)
  signUpBtn.addEventListener("click", signUp)
}