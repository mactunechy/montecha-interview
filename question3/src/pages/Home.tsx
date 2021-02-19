import React, { useState } from "react";
import BookCard from "../components/BookCard";
import Pagination from "../components/common/Pagination";
import SearchForm from "../components/SearchForm";
import { useApi } from "../hooks/useApi";
import { IBook, searchBook } from "../services/books";
import { paginate } from "../utils/paginate";

const PAGE_SIZE = 10;

const Home: React.FC = () => {
  const searchBooksApi = useApi<IBook[]>(searchBook);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = () =>
    paginate(searchBooksApi.data?.docs || [], currentPage, PAGE_SIZE);

  return (
    <>
      <div className="justify-content-center">
        <h1 className="text-center mt-4">The Library</h1>
        <SearchForm
          handleSubmit={searchBooksApi.request}
          loading={searchBooksApi.loading}
        />
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            {(paginatedData() as []).map((book: IBook) => {
              return <BookCard book={book} key={book.key} />;
            })}
          </div>
        </div>
      </div>
      {searchBooksApi.data && (
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Pagination
              currentPage={currentPage}
              itemsCount={searchBooksApi.data?.docs.length}
              onPageChange={setCurrentPage}
              pageSize={PAGE_SIZE}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
