const showPost = (post, deleteBtn) => {
  const main = document.querySelector("main")

  const postContainer = document.createElement("div")
  postContainer.className = "post-container"
  const postCard = document.createElement("div")
  postCard.className = "post-card"

  fetch(`http://localhost:3000/users/${post.user_id}`)
  .then( res => res.json() )
  .then( user => {
    const username = document.createElement('p')
    username.className = "post-username"
    username.innerText = user.username
    postCard.appendChild(username)     
  })
  
  const title = document.createElement("h2")
  title.className = "post-title"
  title.innerText = post.title
    
  const postImg = document.createElement("img")
  postImg.className = "post-image"
  postImg.src = post.img_url
  
  const postText = document.createElement("p")
  postText.className = "post-text-content"
  postText.innerText = post.content
  
  const likesDiv = document.createElement("div")
  const likesCount = document.createElement("span")
  likesCount.className = "likes"
  likesCount.innerText = `${post.likes} likes`
  const likeBtn = document.createElement("button")
  likeBtn.className = "like-button"
  likeBtn.innerText = "👍"
  likesDiv.appendChild(likesCount)
  likesDiv.appendChild(document.createElement("br"))
  likesDiv.appendChild(likeBtn)
  let children
  if (deleteBtn) {
    children = [title, postImg, postText, likesDiv, deleteBtn]
  } else {
    children = [title, postImg, postText, likesDiv]
  }
  children.forEach(child => {
    postCard.appendChild(child)
  })

  
  postContainer.appendChild(postCard)
  main.appendChild(postContainer)
  
  handleLikes(post, likeBtn)   
  if (deleteBtn) {
    handleDelete(post, deleteBtn)
  } 
}

function handleLikes(post, likeBtn) {
  likeBtn.addEventListener("click", () => {
    fetch(`http://localhost:3000/posts/${post.id}`)
    .then( res => res.json() )
    .then( post => {
      const currentLikes = post.likes
      let newLikes
      if (likeBtn.innerText === "👍") {
        newLikes = currentLikes + 1
        likeBtn.innerText = "👎"
      } else {
        newLikes = currentLikes - 1
        likeBtn.innerText = "👍"
      }
      const likesSpan = likeBtn.previousElementSibling.previousElementSibling
      likesSpan.innerText = `${newLikes} likes`
      persistLikes(post, newLikes)
    })   
  })    
}

function persistLikes(post, newLikes) {
  fetch(`http://localhost:3000/posts/${post.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likes: newLikes
    })
  })
  .then(res => res.json())
  .then(post => console.log(post))
}

function handleDelete(post, button) {
  button.addEventListener("click", () => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "DELETE"
    })
    .then( res => res.json() )
    .then( post => {
      fetch(`http://localhost:3000/users/${post.user_id}`)
      .then( res => res.json() )
      .then( user => {
        removeAllChildren(document.querySelector("main"))
        fetchAndRenderUserHome(user)
      })
    })
  })
}