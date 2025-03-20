import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

export const NewsProvider = ({ children }) => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedcatogery, setselectedcatogery] = useState("general");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setselectedArticle] = useState(null);
  const [showModel, setshowModel] = useState(false);
  const [bookmarks, setbookmarks] = useState([]);
  const [showBookmarks, setshowBookmarks] = useState(false);
  const [showNews, setshowNews] = useState(true);
  const [showBlogform, setShowBlogform] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [showBlogModel, setshowblogModel] = useState(false);
  const [selectedPost, setselectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handlesBackToNews = () => {
    setshowNews(true);
    setShowBlogform(false);
    setIsEditing(false);
    setselectedPost(null);
  };

  const handleblogform = () => {
    setshowNews(false);
    setShowBlogform(true);
  };

  const handleCreateBlog = (newBlog, isedit) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = isedit
        ? prevBlogs.map((blog) => (blog === selectedPost ? newBlog : blog))
        : [...prevBlogs, newBlog];
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      return updatedBlogs;
    });
    setIsEditing(false);
    setselectedPost(null);
  };

  const handleEditBlog = (blog) => {
    setselectedPost(blog);
    setIsEditing(true);
    setshowNews(false);
    setShowBlogform(true);
  };

  const handleDeleteBlog = (blogToDelete) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.filter((blog) => blog != blogToDelete);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      return updatedBlogs;
    });
  };

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
    setbookmarks(savedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // fetching News API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://gnews.io/api/v4/top-headlines?category=${selectedcatogery}&lang=en&apikey=18e3ca74c04a115ea229b3ddd2bdbd69`;

        if (searchQuery) {
          url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=18e3ca74c04a115ea229b3ddd2bdbd69`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
          setHeadline(data.articles[0]);
          setNews(data.articles.slice(1));
        } else {
          setArticles([]);
          setNews([]);
        }
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };

    fetchNews();
  }, [selectedcatogery, searchQuery]);

  return (
    <NewsContext.Provider
      value={{
        headline,
        news,
        articles,
        selectedcatogery,
        setselectedcatogery,
        categories,
        searchInput,
        setSearchInput,
        searchQuery,
        setSearchQuery,
        selectedArticle,
        setselectedArticle,
        showModel,
        setshowModel,
        bookmarks,
        setbookmarks,
        showBookmarks,
        setshowBookmarks,
        showNews,
        setshowNews,
        showBlogform,
        setShowBlogform,
        handleblogform,
        handlesBackToNews,
        blogs,
        setBlogs,
        handleCreateBlog,
        selectedPost,
        setselectedPost,
        showBlogModel,
        setshowblogModel,
        isEditing,
        setIsEditing,
        handleEditBlog,
        handleDeleteBlog,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
