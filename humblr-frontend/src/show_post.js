// document.addEventListener('DOMContentLoaded', () => {
//     getPost()
//   })
  
  const getPost = (post) => {
    fetch(`http://localhost:3000/posts/${post.id}`)
    .then (res => res.json())
    .then (post => {
      showPost(post)})
  }

  const showPost = (post) => {
    const main = document.querySelector("main")
    const postContainer = document.createElement("div")
    postContainer.className = "post-container"
    const postCard = document.createElement("div")
    postCard.className = "post-card"

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
    likesCount.innerText = `${post.likes.length} likes`
    const likeBtn = document.createElement("button")
    likeBtn.className = "like-button"
    likeBtn.innerText = "♥"
    likesDiv.appendChild(likesCount)
    likesDiv.appendChild(likeBtn)

    let children = [title, postImg, postText, likesDiv]
    children.forEach(child => {
      postCard.appendChild(child)
    })

    postContainer.appendChild(postCard)
    main.appendChild(postContainer)
  
    likeBtn.addEventListener('click', (e) => {
      const currentLikes = parseInt(likesCount.innerHTML.split(' ')[0])
      const newLikes = currentLikes + 1
      likesCount.innerText = `${newLikes} likes`
      persistLikes(post)
    })
    

    const persistLikes = (post, user) => {
      fetch('http://localhost:3000/likes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post_id: post.id, 
            user_id: post.user_id
        })
      })
      .then(res => res.json())
      .then(post => console.log(post))
    }
  
  }  