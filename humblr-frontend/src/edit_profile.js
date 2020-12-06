function editProfile(user) {
  const main = document.querySelector("main")
  const editFormContainer = document.createElement("div")
  editFormContainer.class = "edit-profile-form-container"

  const editFormCard = document.createElement('div')
  editFormCard.className = "edit-profile-form-card"

  const editFormHeader = document.createElement("h2")
  editFormHeader.innerText = "Edit Profile"

  const editForm = document.createElement("form")
  editForm.className = "edit-profile-form"                      //create form

  const emailLabel = document.createElement("label")
  emailLabel.className = "edit-profile-form-label"
  emailLabel.innerText = "Email"
  editForm.appendChild(emailLabel)
  editForm.appendChild(document.createElement("br"))            //append email label to form

  const emailInput = document.createElement("input")
  emailInput.className = "edit-profile-form-input"
  emailInput.id = "email"
  emailInput.value = user.email
  editForm.appendChild(emailInput)  
  editForm.appendChild(document.createElement("br"))            //append prefilled email to form

  const firstNameLabel = document.createElement("label")
  firstNameLabel.className = "edit-profile-form-label"
  firstNameLabel.innerText = "First Name"
  editForm.appendChild(firstNameLabel)
  editForm.appendChild(document.createElement('br'))            //append first name label to form

  const firstName = document.createElement("input")
  firstName.className = "edit-profile-form-input"
  firstName.id = "first-name"
  firstName.value = user.first_name
  editForm.appendChild(firstName)
  editForm.appendChild(document.createElement("br"))            //append first name to form

  const lastNameLabel = document.createElement("label")
  lastNameLabel.className = "edit-profile-form-label"
  lastNameLabel.innerText = "Last Name"
  editForm.appendChild(lastNameLabel)
  editForm.appendChild(document.createElement("br"))            //append last name label to form

  const lastName = document.createElement("input")
  lastName.className = "edit-profile-form-input"
  lastName.id = "last-name"
  lastName.value = user.last_name
  editForm.appendChild(lastName)
  editForm.appendChild(document.createElement("br"))            //append last name to form

  const bioLabel = document.createElement("label")
  bioLabel.className = "edit-profile-form-label"
  bioLabel.innerText = "Bio"
  editForm.appendChild(bioLabel)
  editForm.appendChild(document.createElement("br"))            //append bio label to form

  const bio = document.createElement("textarea")
  bio.className = "edit-profile-form-input"
  bio.id = "bio"
  bio.value = user.bio
  editForm.appendChild(bio)
  editForm.appendChild(document.createElement('br'))            //append bio to form

  const submitBtn = document.createElement('input')
  submitBtn.type = 'submit'
  submitBtn.value = 'Update Profile'
  editForm.appendChild(submitBtn)

  editForm.addEventListener("submit", e => updateUser(e, user))
  main.appendChild(editForm)

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
    const navBar = document.querySelector("nav")
    newMenu(navBar, "Dashboard", "Edit Profile", "Delete Profile", "Log Out")   //homepage.js
    renderUserInfo(user)                                                        //homepage.js
    renderThisUserPosts(user)                                                   //homepage.js
  })
}