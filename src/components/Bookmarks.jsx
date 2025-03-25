import React from "react";
import techImg from "../assets/images/tech.jpg";

const Bookmarks = ({
  show,
  bookmarks,
  onclose,
  onSelectArticle,
  onDeleteBookmark,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-1000">
      <div className="bg-blue-50 rounded-2xl w-[28%] h-auto relative shadow-[0_0_5rem_4rem_rgba(0,0,0,0.5)] p-4">
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onclose}
        >
          <i className="fa-solid fa-xmark text-3xl"></i>
        </span>
        <h1 className="bookmark-title text-3xl uppercase tracking-wider">
          Bookmarks
        </h1>
        <div className="bookmarks-content max-h-[300px] overflow-y-auto ">
          {bookmarks.length === 0 ? (
            <p className="text-center text-gray-700">No bookmarks yet.</p>
          ) : (
            bookmarks.map((article, index) => (
              <div
                className="list flex items-center justify-between gap-3 p-2 border-b border-gray-700 cursor-pointer"
                key={index}
                onClick={() => onSelectArticle(article)}
              >
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={article.image || techImg}
                  alt="source"
                />
                <h1 className="text-lg font-bold flex-1 truncate ">
                  {article.title}
                </h1>
                <span>
                  <i
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteBookmark(article);
                    }}
                    className="fa-solid fa-circle-xmark text-3xl text-fuchsia-300 cursor-pointer"
                  ></i>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
