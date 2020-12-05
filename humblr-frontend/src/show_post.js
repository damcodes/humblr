document.addEventListener('DOMContentLoaded', () => {
    getPost()
  })
  
  const getPost = () => {
    fetch(`http://localhost:3000/posts/${post.id}`)
    .then (res => res.json())
    .then (post => {
      showPost(post)})
  }

  const getUsers = () => {
    fetch(`http://localhost:3000/users`)
    .then (res => res.json())
    .then (users => {
      findUser(users)})
  }

  const showPost = (post) => {
    const title = document.querySelector('.title')
    title.innerText = post.title
  
    const someImage = document.querySelector('.image')
    someImage.src = post.img_url

    const postText = document.querySelector('.post-text-section')
    postText.innerText = post.content

    const likesCount = document.querySelector('.likes')
    likesCount.innerText = `${post.likes.length} likes`

    // if your user_id is not in the list of likes for this post, you
    //can like it, otherwise post message "You like this."
    const didLike = post.likes.find(like => like.user_id === currentUser.id)
    const likeBtn = document.querySelector('.like-button')
    if didLike(post) => {likeBtn.innerText = 'You like this."'}

    if !didLike() => {
      likeBtn.addEventListener('click', (e) => {
      const currentLikes = parseInt(likesCount.innerHTML.split(' ')[0])
      const newLikes = currentLikes + 1
      likesCount.innerText = `${newLikes} likes`
      persistLikes(post)
    })
  }

    const persistLikes = (post) => {
      fetch('http://localhost:3000/posts/${posts.id}', {
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
  
    const commentForm = document.querySelector('.comment-form')
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const newComment = e.target.comment.value
      renderComments(newComment)
      e.target.reset()
      persistComment(newComment)
    })
    
    post.comments.forEach(comment => renderComments(comment))
  }
  
  const renderComments = (comment) => {
    const commentsContainer = document.querySelector('.comments')
    const commentLi = document.createElement('li')
    commentLi.innerText = comment.content

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "❌"
      deleteBtn.addEventListener('click', (e) => {
        deleteComment(e, comment.id)
      })

    commentLi.appendChild(deleteBtn)
    commentsContainer.appendChild(commentLi)
  }

  const persistComment = (newComment) => {
    fetch('http://localhost:3000/posts/${posts.id}', {
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
    .then(comment => renderComments(comment))
  }
  

  const deleteComment = (e, commentId) => {
    const commentLi = e.target.parentElement
    commentLi.remove()
    //THIS DOES NOT WORK, fetch is wrong
    // fetch(`http://localhost:3000/posts/${postsId}/${comments.id}`, {
    //   method: "DELETE",
    //   headers: {
    //     'Content-Type': "application/json"
    //   }
    // })

  }  