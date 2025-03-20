import React, { useContext } from "react";
import techImg from "../assets/images/tech.jpg";
import { NewsContext } from "../context/NewsContext";

const News = () => {
  const {
    headline,
    articles,
    setselectedArticle,
    bookmarks,
    setshowModel,
    setbookmarks,
  } = useContext(NewsContext);

  const handleArticleClick = (article) => {
    setselectedArticle(article);
    setshowModel(true);
  };

  const handleBookmarksClick = (article) => {
    setbookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.find(
        (bookmarks) => bookmarks.title === article.title
      )
        ? prevBookmarks.filter((bookmarks) => bookmarks.title !== article.title)
        : [...prevBookmarks, article];

      return updatedBookmarks;
    });
  };

  return (
    <div className="news bg-zinc-900 2xl:w-[700px] xl:h-[520px] xl:w-[510px] lg:h-[500px] lg:w-[510px] h-[700px] w-full lg:rounded-xl overflow-auto">
      <div
        className="headline relative flex items-center justify-center"
        onClick={() => handleArticleClick(headline)}
      >
        <img
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[350px] object-cover rounded-xl"
          src={headline?.image || techImg}
          alt="news"
        />
        <h2 className="absolute bottom-0 left-0 w-full bg-black/70 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tighter p-2">
          {headline?.title}
          <i
            className={`${
              bookmarks.some((bookmark) => bookmark.title === articles.title)
                ? "fa-solid"
                : "fa-regular"
            } fa-bookmark absolute right-4 top-4 text-xl sm:text-2xl md:text-3xl`}
            onClick={(e) => {
              e.stopPropagation();
              handleBookmarksClick(headline);
            }}
          ></i>
        </h2>
      </div>

      <div className="news-grid grid lg:grid-rows-2 lg:grid-cols-3 grid-cols-2 gap-3 text-xl rounded-md">
        {articles.slice(1, 12).map((article, index) => (
          <div
            key={index}
            className="grid-item relative "
            onClick={() => handleArticleClick(article)}
          >
            <img
              className="w-[100%] h-auto lg:h-[120px]  object-cover "
              src={article.image || techImg}
              alt="news"
            />
            <h2 className="absolute text-[1.5rem] rounded-xl bottom-0 left-0  bg-black/70 text-zinc-100 ">
              {article.title.slice(0, 40)}
            </h2>
            <i
              className={`${
                bookmarks.some((bookmark) => bookmark.title === article.title)
                  ? "fa-solid"
                  : "fa-regular"
              } fa-bookmark absolute right-0 top-0 text-4xl`}
              onClick={(e) => {
                e.stopPropagation();
                handleBookmarksClick(article);
              }}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
