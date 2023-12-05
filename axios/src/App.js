
import React, { useState } from "react";
import axios from 'axios';
const client = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com/posts"
});

// const baseURL="https://jsonplaceholder.typicode.com/posts";


function App() {
  const [post,setPost]=useState("null");
  function getPost() {
    client.get("/1").then((response)=>{
      setPost(response.data);
    })
  }
  function createPost(){
    axios
    .post(baseURL, {
      title:"hello world",
      body:"this is a new post.",
    })
    .then((response)=>{
      setPost(response.data);
    });

  }

  function updatePost(){
    axios
    .put(`${baseURL}/1`, {
      title:"hiii guys",
      body:"this is updated post.",
    })
    .then((response)=>{
      setPost(response.data);
    });

  }

  function deletePost(){
    axios
    .delete(`${baseURL}/1`
   )
    .then((response)=>{
      setPost(response.data);
    });

  }
  return (
   <>
   <li>
    <button onClick={getPost}>view post</button>
   </li>
   <li>
    <button onClick={createPost}>create post</button>
   </li>
   <li>
    <button onClick={updatePost}>update post</button>
   </li>
   <li>
    <button onClick={deletePost}>delete post</button>
   </li>
   <h1>{post?.title ? post.title:"no post"}</h1>
   <p>{post?.body ? post.body :"no body"}</p>
   </>
  );
}

export default App;
