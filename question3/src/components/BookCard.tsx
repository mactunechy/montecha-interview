import React from "react";
import { Link } from "react-router-dom";

import { IBook } from "../services/books";

const BookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="col-md-4">
      <Link to={`/book${book.key}`}>
        <div className="card hover-card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            {/* <div className="col-md-4">
            <img src={book.cover_i} alt="..." />
          </div>v */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author_name}</p>
                <p className="card-text">
                  <small className="text-muted">
                    First published in {book.first_publish_year}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
