import React from 'react';
import Post from './Post';
import PostAttributes from './PostAttributes';

const PostList = (props) => {
  return props.posts.map(post => (
    <Post key={post.id} title={post.title} src={post.src}>
      <PostAttributes
        id={post.id}
        likes={post.likes}
        likePost={() => props.likePost(post.id)}
        dislikePost={() => props.dislikePost(post.id)}
      />
    </Post>
  ));
}

export default PostList;
