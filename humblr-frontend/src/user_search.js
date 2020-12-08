function searchUser(follower_user) {
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

  // searchForm.addEventListener("submit", e => {
  //   fetch(`http://localhost:3000/`)
  // })

  
}