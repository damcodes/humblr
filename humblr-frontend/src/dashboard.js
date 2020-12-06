function renderDashboard(user) {
  const followedUsers = user.followings
  const postsArr = followedUsers.map(user => user.posts)
  const posts = postsArr.flat()
  posts.forEach(post => showPost(post))
}