import React from "react";

export default function Posts(props) {
  if (props.loading) {
    return <h3>Loading ...</h3>;
  }
  return (
    <div>
      <ul>
        {props.posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
