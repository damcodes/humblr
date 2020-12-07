function editProfile(user) {
  fetch(`http://localhost:3000/users/${user.id}`)
  .then( res => res.json() )
  .then( user => {
    const main = document.querySelector("main")
    const editFormContainer = document.createElement("div")
    editFormContainer.className = "form-container"
  
    const editFormCard = document.createElement('div')
    editFormCard.className = "form-card"
  
    const editFormHeader = document.createElement("h2")
    editFormHeader.innerText = "Edit Profile"
    editFormHeader.className = "form-header"
    editFormCard.appendChild(editFormHeader)
    editFormCard.appendChild(document.createElement("br"))
  
    const editForm = document.createElement("form")
    editForm.className = "form"                      //create form
  
    const emailLabel = document.createElement("label")
    emailLabel.className = "form-label"
    emailLabel.innerText = "Email"
    editForm.appendChild(emailLabel)
    editForm.appendChild(document.createElement("br"))            //append email label to form
  
    const emailInput = document.createElement("input")
    emailInput.className = "form-input"
    emailInput.id = "email"
    emailInput.value = user.email
    editForm.appendChild(emailInput)  
    editForm.appendChild(document.createElement("br"))            //append prefilled email to form
  
    const firstNameLabel = document.createElement("label")
    firstNameLabel.className = "form-label"
    firstNameLabel.innerText = "First Name"
    editForm.appendChild(firstNameLabel)
    editForm.appendChild(document.createElement('br'))            //append first name label to form
  
    const firstName = document.createElement("input")
    firstName.className = "form-input"
    firstName.id = "first-name"
    firstName.value = user.first_name
    editForm.appendChild(firstName)
    editForm.appendChild(document.createElement("br"))            //append first name to form
  
    const lastNameLabel = document.createElement("label")
    lastNameLabel.className = "form-label"
    lastNameLabel.innerText = "Last Name"
    editForm.appendChild(lastNameLabel)
    editForm.appendChild(document.createElement("br"))            //append last name label to form
  
    const lastName = document.createElement("input")
    lastName.className = "form-input"
    lastName.id = "last-name"
    lastName.value = user.last_name
    editForm.appendChild(lastName)
    editForm.appendChild(document.createElement("br"))            //append last name to form
  
    const bioLabel = document.createElement("label")
    bioLabel.className = "form-label"
    bioLabel.innerText = "Bio"
    editForm.appendChild(bioLabel)
    editForm.appendChild(document.createElement("br"))            //append bio label to form
  
    const bio = document.createElement("textarea")
    bio.className = "form-input"
    bio.id = "bio"
    bio.value = user.bio
    editForm.appendChild(bio)
    editForm.appendChild(document.createElement('br'))            //append bio to form
  
    const submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.value = 'Update Profile'
    editForm.appendChild(submitBtn)
  
    editForm.addEventListener("submit", e => updateUser(e, user))
    editFormCard.appendChild(editForm)
    editFormContainer.appendChild(editFormCard)
    main.appendChild(editFormContainer)
  })
}

function updateUser(e, user) {
  e.preventDefault()
  const form = e.target
  const newEmail = form.querySelector("#email").value
  const newFirstName = form.querySelector("#first-name").value
  const newLastName = form.querySelector("#last-name").value
  const newBio = form.querySelector("#bio").value
  fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: newEmail,
      first_name: newFirstName,
      last_name: newLastName,
      bio: newBio
    })
  })
  .then( res => res.json() )
  .then( user => {
    removeAllChildren(document.querySelector('main'))
    fetchAndRenderUserHome(user)                                                   //homepage.js
  })
}