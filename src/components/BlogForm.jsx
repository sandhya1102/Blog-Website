import React, { useContext, useState, useEffect } from "react";
import Blogpic from "../assets/images/profile.jpg";
import { NewsContext } from "../context/NewsContext";

const BlogForm = ({ onback, editPost, isEditing }) => {
  const { setshowNews, setShowBlogform, handleCreateBlog } =
    useContext(NewsContext);

  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    if (isEditing && editPost) {
      setImage(editPost.image);
      setTitle(editPost.title);
      setContent(editPost.content);
      setShowBlogform(true);
    } else {
      setImage(null);
      setTitle("");
      setContent("");
      setShowBlogform(true);
    }
  }, [isEditing, editPost]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxsize = 1 * 1024 * 1024;

      if (file.size > maxsize) {
        alert("File size exceeds 1 MB");
        return;
      }

      setImageName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      image,
      title,
      content,
    };
    handleCreateBlog(newBlog, isEditing);
    setImage(null);
    setImageName("");
    setTitle("");
    setContent("");
    setShowForm(false);
    setShowBlogform(false);
    setshowNews(true);
    onback();
  };

  return (
    <div className=" w-full h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
      <div className="w-[95vw] h-[95vmin] bg-zinc-950 shadow-2xl shadow-zinc-700 text-white flex relative rounded-lg p-8">
        <div className="posts w-[50%] h-[100%] lg:flex hidden relative">
          <img
            className="w-[150px] h-[150px] object-cover rounded-[50%] absolute top-[40%] left-[87%] 2xl:top-[40%] 2xl:left-[92%] border-[2px] border-gray-800 justify-center items-center"
            src={Blogpic}
            alt="user image"
          />
        </div>

        <div className="blog-form w-full lg:w-1/2 flex flex-col gap-[4rem] relative items-center h-[60%]">
          {!showForm ? (
            <div className="w-full flex justify-center items-center absolute top-[65%] bottom-0">
              <button
                id="create-btn"
                className=" bg-gradient-to-r  from-blue-500 to-purple-600 text-white text-3xl cursor-pointer rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                onClick={() => setShowForm(true)}
              >
                {isEditing ? "Update Post" : "Create New Post"}
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-[6rem] bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-center font-bold">
                {isEditing ? "Edit Post" : "New Post"}
              </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[7rem] w-full max-w-[400px]"
              >
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-3 text-2xl cursor-pointer"
                >
                  <i className="fa-solid fa-cloud-arrow-up text-5xl text-purple-400"></i>
                  Upload Image ({imageName || "No File Choosen"})
                </label>
                <input
                  onChange={handleImageChange}
                  className="hidden"
                  type="file"
                  id="file-upload"
                  accept="image/*"
                />

                <input
                  type="text"
                  placeholder="Add Title (Max 60 Characters)"
                  className="text-2xl border-b-2 border-purple-400 opacity-75 focus:outline-none pb-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  placeholder="Add Text"
                  className="text-2xl border-b-2 border-purple-400 opacity-75 w-full h-40 resize-none focus:outline-none pb-2"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <button
                  className="w-full h-14 bg-gradient-to-tr from-blue-500 to-purple-600 font-bold text-center text-2xl rounded-xl shadow-2xl shadow-cyan-800 uppercase tracking-widest hover:scale-105 active:scale-95 transition"
                  type="submit"
                >
                  {isEditing ? "Update Post" : "Submit Post"}
                </button>
              </form>
            </>
          )}
        </div>
        <button
          onClick={onback}
          className="absolute top-9 right-16 text-2xl font-medium tracking-tight hover:scale-105 transition"
        >
          Back <i className="fa-solid fa-backward"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
