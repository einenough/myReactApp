import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "С++", body: "Description" },
    { id: 2, title: "HTML", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={posts.title} />
      <PostList posts={posts2} title={posts2.title} />
    </div>
  );
}

export default App;
