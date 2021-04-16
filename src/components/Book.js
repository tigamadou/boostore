import React from 'react';

const Book = (book) => {
  const {
    id, title, category, handleRemoveBook,
  } = book;
  return (

    <div className="book_card">
      <div className="book_info">
        <div className="info_content">
          <div className="book_category">{category}</div>
          <div className="book_title">{title}</div>
          <div className="book_author">Author</div>
        </div>
        <div className="info_footer">
          <ul>
            <li><a href="/#">Comments</a></li>
            <li><a href="/#" role="button" onClick={() => handleRemoveBook({ id })}>Remove</a></li>
            <li><a href="/#">Edit</a></li>
          </ul>
        </div>
      </div>
      <div className="book_details">
        <div className="book_progress">
          <div className="book_progress_chart">
            chart
          </div>
          <div className="book_progress_details">
            <div className="book_progress_value">64%</div>
            <div className="book_progress_text">COMPLETED</div>
          </div>
        </div>
        <div className="book_chapter">
          <div className="title">
            Current chapter
          </div>
          <div className="value">
            Chapter 17
          </div>
          <div className="update">
            <button type="button" className="update_progress">Update progress</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Book;
