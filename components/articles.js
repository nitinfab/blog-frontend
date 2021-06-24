import React from "react";
// import Card from "./card";
import Link from "next/link";
import Image from "./image";

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
      <div className="posts" >
          {articles.map((article, i) => {
            return (
              <Link as={`/article/${article.slug}`} href="/article/[id]">
      {/* <a className="uk-link-reset"> */}
        <div className="post">
          <div className="uk-card-media-top">
            <Image image={article.image} />
          </div>
          <div className="postInfo">
            {/* <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p> */}
            <p id="title" className="postTitle">
              {article.title}
            </p>
          </div>
        </div>
      {/* </a> */}
    </Link>
            );
          })}
      </div>
      
  );
};

export default Articles;
