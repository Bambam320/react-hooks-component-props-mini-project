import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About.js"
import ArticleList from "./ArticleList.js"

// console.log("This is the blog data" + blogData);

function App() {
  const blogs = blogData.posts.map((blog) => {
    // console.log("This is blog" + blog)
    return (
      <ArticleList key={blog.id} theseBlogs={blog} />
    )
  })
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About 
        img={blogData.image} 
        about={blogData.about}
      />
      {blogs}
    </div>
  );
}

export default App;
