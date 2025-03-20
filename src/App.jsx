import { useContext } from "react";
import BlogForm from "./components/BlogForm";
import Dashboard from "./dashboard/Dashboard";
import { NewsContext } from "./context/NewsContext";

function App() {
  const {
    showNews,
    showBlogform,
    handlesBackToNews,
    blogs,
    handleCreateBlog,
    selectedPost,
    isEditing,
    handleEditBlog,
    handleDeleteBlog,
  } = useContext(NewsContext);

  return (
    <>
      {showNews && (
        <Dashboard
          blogs={blogs}
          onEditBlog={handleEditBlog}
          onDeleteBlog={handleDeleteBlog}
        />
      )}
      {showBlogform && (
        <BlogForm
          onback={handlesBackToNews}
          oncreateBlog={handleCreateBlog}
          editPost={selectedPost}
          isEditing={isEditing}
        />
      )}
    </>
  );
}

export default App;
