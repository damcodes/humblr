function renderNewPostForm(user) {
  const main = document.querySelector("main")
  const navBar = document.querySelector("nav")
  removeAllChildren(navBar)
  removeAllChildren(main)

  const newPostFormContainer = document.createElement("div")
  newPostFormContainer.className = "new-post-form-container"
  main.appendChild(newPostFormContainer)

  const newPostFormCard = document.createElement('div')
  newPostFormCard.className = "new-post-form-card"
  newPostFormContainer.appendChild(newPostFormCard)

  const newPostHeader = document.createElement("h2")
  newPostHeader.className = "form-header"
  newPostHeader.innerText = "New Post"
  newPostFormCard.appendChild(newPostHeader)
  newPostFormCard.appendChild(document.createElement("br"))

  const newPostForm = document.createElement('form')
  newPostFormCard.appendChild(newPostForm)

  const titleLabel = document.createElement('label')
  titleLabel.className = 'form-label'
  titleLabel.innerText = "Title"
  newPostForm.appendChild(titleLabel)
  newPostForm.appendChild(document.createElement("br"))

  const titleInput = document.createElement('input')
  titleInput.className = 'form-input'
  titleInput.placeholder = 'Title'
  titleInput.id = "title"
  newPostForm.appendChild(titleInput)
  newPostForm.appendChild(document.createElement("br"))

  const imgLabel = document.createElement('label')
  imgLabel.className = "form-label"
  imgLabel.innerText = "Image URL"
  newPostForm.appendChild(imgLabel)
  newPostForm.appendChild(document.createElement("br"))

  const imgInput = document.createElement('input')
  imgInput.className = "form-input"
  imgInput.placeholder = "URL"
  imgInput.id = "img"
  newPostForm.appendChild(imgInput)
  newPostForm.appendChild(document.createElement('br'))

  const contentLabel = document.createElement('label')
  contentLabel.className = 'form-label'
  contentLabel.innerText = 'Post'
  newPostForm.appendChild(contentLabel)
  newPostForm.appendChild(document.createElement('br'))

  const contentInput = document.createElement('textarea')
  contentInput.className = 'form-input'
  contentInput.placeholder = 'Write Post'
  contentInput.id = "content"
  newPostForm.appendChild(contentInput)
  newPostForm.appendChild(document.createElement('br'))

  const submitBtn = document.createElement('input')
  submitBtn.type = 'submit'
  submitBtn.value = 'Post'
  newPostForm.appendChild(submitBtn)

  newPostForm.addEventListener("submit", e => persistPost(e, user))

}

function persistPost(e, user) {
  e.preventDefault()
  const form = e.target
  const title = form.querySelector("#title").value
  const img = form.querySelector("#img").value
  const content = form.querySelector("#content").value
  fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      title: title,
      img_url: img,
      content: content, 
      user_id: user.id
    })
  })
  .then( res => res.json() )
  .then( post => {
    const main = document.querySelector("main")
    removeAllChildren(main)
    fetchAndRenderUserHome(user) 
  })
}