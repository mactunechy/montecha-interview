import React, { useState } from "react";

const SearchForm: React.FC<{
  loading: boolean;
  handleSubmit(query: string): void;
}> = ({ handleSubmit, loading }) => {
  const [q, setQ] = useState<string>("");

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="m-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(q);
            }}
            className="form "
          >
            <div
              className="form-row 
            form-group  form-group-lg"
            >
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                disabled={loading}
                placeholder="Type to and hit 'Enter' search for a book"
                className="form-control col-10 form-control-lg"
              />
              <button
                disabled={loading}
                className="btn btn-lg col-2 btn-primary"
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
