document.addEventListener('DOMContentLoaded', () => {
    getPost()
  })
  
  const getPost = () => {
    fetch(`http://localhost:3000/posts/9`)
    .then (res => res.json())
    .then (post => {
      console.log(post)
      showPost(post)})
  }

  const showPost = (post) => {
    const title = document.querySelector('.title')
    title.innerText = post.title
  
    const someImage = document.querySelector('.image')
    someImage.src = post.img_url
  }  