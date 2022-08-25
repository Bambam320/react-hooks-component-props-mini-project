import React from "react";
import Article from "./Article.js";

function ArticleList(props) {
    const eachBlog = Object.entries(props).map((blog) => {
        return <Article 
            key={blog[1].id} 
            title={blog[1].title} 
            date={blog[1].date} 
            preview={blog[1].preview}
            minutes={blog[1].minutes}
        />
    })
    return(
        <main>{eachBlog}</main>
    )
}

export default ArticleList;