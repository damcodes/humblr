function renderDashboard(user) {
  fetch(`http://localhost:3000/users/${user.id}`)
  .then( res => res.json () )
  .then( user => {
    const followedUsers = user.followings
    const postsArr = followedUsers.map(user => user.posts)
    const posts = postsArr.flat().sort((x,y) => y.created_at - x.created_at)
    posts.forEach(post => showPost(post))
  })
  // const followedUsers = user.followings
  // const postsArr = followedUsers.map(user => user.posts)
  // const posts = postsArr.flat().sort((x,y) => x.created_at - y.created_at)
  // posts.forEach(post => showPost(post))
}

