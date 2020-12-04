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
  
  }  