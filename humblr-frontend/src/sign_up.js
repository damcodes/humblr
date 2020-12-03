function signUp() {
  const main = document.querySelector("main")
  removeAllChildren(main)
  renderSignUpForm(main)
}

function renderSignUpForm(main) {
  const signUpHeader = document.createElement("h2")
  signUpHeader.innerText = "Sign Up!"
  const formDiv = document.createElement("div")
  formDiv.className = "signUpBox"
  const parentForm = document.createElement("form")
  const emailInput = document.createElement("input")
  const usernameInput = document.createElement("input")
  const firstNameInput = document.createElement("input")
  const lastNameInput = document.createElement("input")
  const submitBtn = document.createElement("input")
  emailInput.placeholder = "Email"
  emailInput.id = "email-input"
  usernameInput.placeholder = "Username"
  usernameInput.id = "username-input"
  firstNameInput.placeholder = "First Name"
  firstNameInput.id = "firstName-input"
  lastNameInput.placeholder = "Last Name"
  lastNameInput.id = "lastName-input"
  submitBtn.type = "submit"
  let children = [emailInput, usernameInput, firstNameInput, lastNameInput, submitBtn]
  children.forEach(child => {
    parentForm.appendChild(child)
    parentForm.appendChild(document.createElement("br"))
  })
  formDiv.appendChild(signUpHeader)
  formDiv.appendChild(parentForm)
  main.appendChild(formDiv)
  parentForm.addEventListener("submit", e => createUser(e))
}

function createUser(e) {
  e.preventDefault()
  const form = e.target
  const email = form.querySelector("#email-input").value
  const username = form.querySelector("#username-input").value
  const firstName = form.querySelector("#firstName-input").value
  const lastName = form.querySelector("#lastName-input").value
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email,
      username: username,
      first_name: firstName,
      last_name: lastName
    })
  }).then( res => res.json() ).then(user => {
    console.log(user)
    if (user instanceof Array) {
      renderErrors(user, form)
    }
   })
  form.reset()
}

function renderErrors(errors, form) {
  errors.forEach(error => {
    const newLi = document.createElement("li")
    newLi.style.color = "red"
    newLi.innerText = error
    newLi.style.textAlign = "center"
    const parent = form.parentNode
    parent.insertBefore(newLi, form)
  })
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild)
  }
}