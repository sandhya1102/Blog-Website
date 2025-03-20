import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import News from "../components/News";
import Weather from "../components/Weather";
import Calender from "../components/Calender";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Newsmodel from "../Model/Newsmodel";
import BlogsModel from "../Model/BlogsModel";
import { NewsContext } from "../context/NewsContext";
import Bookmarks from "../components/Bookmarks";

const Dashboard = ({
  handleArticleClick,
  onshowBlogs,
  onEditBlog,
  onDeleteBlog,
}) => {
  const {
    selectedArticle,
    showModel,
    setshowModel,
    bookmarks,
    setbookmarks,
    showBookmarks,
    setshowBookmarks,
    selectedPost,
    showBlogModel,
    setshowblogModel,
  } = useContext(NewsContext);

  return (
    <>
      <div className="dashboard w-full min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 grid items-center place-content-center">
        <div className="dashboard-container w-[95vw] xl:w-[95vw] lg:w-[95vw] min-h-[95vh] xl:h-[95vh] bg-zinc-950 shadow-2xl shadow-zinc-700 text-white">
          <Navbar />
          <div className="flex lg:flex-row flex-col lg:h-[calc(100%_-_9rem)]">
            <Sidebar onshowBlogs={onshowBlogs} />
            <div className="flex flex-col lg:flex-row gap-5 ">
              <News />
              <Newsmodel
                show={showModel}
                article={selectedArticle}
                onclose={() => setshowModel(false)}
              />
              <Bookmarks
                show={showBookmarks}
                bookmarks={bookmarks}
                onclose={() => setshowBookmarks(false)}
                onSelectArticle={handleArticleClick}
                onDeleteBookmark={(article) => {
                  setbookmarks((prev) =>
                    prev.filter((item) => item.title !== article.title)
                  );
                }}
              />
              <Blogs onEditBlog={onEditBlog} onDeleteBlog={onDeleteBlog} />
              {selectedPost && showBlogModel && (
                <BlogsModel
                  show={showBlogModel}
                  post={selectedPost}
                  onclose={() => setshowblogModel(false)}
                />
              )}
              <div className="flex lg:flex-col gap-5 ">
                <Weather />
                <Calender />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
