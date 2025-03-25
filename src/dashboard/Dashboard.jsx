import React, { useContext} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import News from "../components/News";
import Weather from "../components/Weather";
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
        <div className= "max-h-full bg-gradient-to-r from-sky-200 to-white ">
          <Navbar />
          <div className="">
            <Sidebar onshowBlogs={onshowBlogs} />
            <div className="flex flex-col lg:flex-row gap-5 ">
              <News   article={selectedArticle}/>
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
             
              <div className="w-BContain ">
              <Blogs onEditBlog={onEditBlog} onDeleteBlog={onDeleteBlog} />
              {selectedPost && showBlogModel && (
                <BlogsModel
                  show={showBlogModel}
                  post={selectedPost}
                  onclose={() => setshowblogModel(false)}
                />
              )}
              <Weather />
             
               </div>
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
};

export default Dashboard;
