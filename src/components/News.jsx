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
        (bookmark) => bookmark.title === article.title
      )
        ? prevBookmarks.filter((bookmark) => bookmark.title !== article.title)
        : [...prevBookmarks, article];

      return updatedBookmarks;
    });
  };

  return (
    <div className="news w-[900px] 2xl:w-full lg:w-full p-5 ">
      {/* Headline Section */}
      <div
        className="headline relative cursor-pointer overflow-hidden "
        onClick={() => handleArticleClick(headline)}
      >
        <img
          className="w-full h-[450px] lg:h-[450px] object-cover transition-transform duration-300 hover:scale-105"
          src={headline?.image || techImg}
          alt="news"
        />

        <div className="absolute bottom-12 left-5 w-full">
          <h2 className="text-[5rem]  font-semibold text-white w-[600px]">
            {headline?.title}
          </h2>
          <p className="absolute bottom-1 left-4.5 text-gray-100 text-[1.5rem] mt-1"
          >{headline?.description?.slice(0, 100)}...</p>
          <div className="absolute left-3 flex gap-4 items-center text-gray-200 mt-2 text-xl">
            <span>📅 {headline?.publishedAt || "Unknown Date"}</span>
            <span>🔗 {headline?.source?.name || "Unknown Source"}</span>
            </div>
          <i
            className={`${
              bookmarks.some((bookmark) => bookmark.title === headline?.title)
                ? "fa-solid"
                : "fa-regular"
            } fa-bookmark absolute right-10 bottom-4 text-4xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-200`}
            onClick={(e) => {
              e.stopPropagation();
              handleBookmarksClick(headline);
            }}
          ></i>
        </div>
      </div>
      <div className="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
  {articles.slice(1,12).map((article, index) => (
    <div
      key={index}
      className="relative overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => handleArticleClick(article)}
    >
      <img
        className="w-full lg:h-[250px] h-[400px] object-cover"
        src={article.image || techImg}
        alt="news"
      />
      <div className="news-text absolute bottom-0 left-0 w-full bg-black/70 p-2">
        <h2 className="text-white text-3xl font-semibold">
          {article.title.slice(0, 50)}...
        </h2>
      </div>
      <i
        className={`${
          bookmarks.some((bookmark) => bookmark.title === article.title)
            ? "fa-solid"
            : "fa-regular"
        } fa-bookmark absolute right-3 top-3 text-3xl text-gray-300 cursor-pointer hover:text-white transition duration-200`}
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
