import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { deletePosts } from './postsSlice'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const onDeletePosts = (postId) => {
    dispatch(deletePosts(postId));
  };


  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <button type="button" onClick={() => onDeletePosts(post.id)} data-id={post.id}>DELETE</button>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))



  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
