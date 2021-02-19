import moment from "moment";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { getBookDetails, IBookDetails } from "../services/books";

const BooDetails = () => {
  const { data, request, loading } = useApi<IBookDetails>(getBookDetails);
  const { type, key } = useParams<{ type: string; key: string }>();

  useEffect(() => {
    request(type, key);
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1 style={{ fontSize: 50 }} className="mt-5 mb-0 ">
          {loading ? "Loading..." : data?.title}
        </h1>

        {data && (
          <>
            <small className="text-muted">
              Created on:
              <span className="p-1 m-1 bg-default">
                {moment(data.created?.value).format("LL")}
              </span>
            </small>
            <small className="text-muted">
              Last modified:{" "}
              <span className="p-1 m-1 bg-default">
                {moment(data.last_modified?.value).format("LL")}
              </span>
            </small>{" "}
            <br />
            <p className="description font-size-30">
              {data.description?.value}
            </p>
            <>
              <p>Tags: </p>
              {data.subjects?.map((sub: string, idx: number) => {
                return (
                  <h2
                    key={idx + "subjects"}
                    className="mx-1 badge badge-secondary d-inline-block"
                  >
                    #{sub}
                  </h2>
                );
              })}
            </>
            <div className="">
              {data.subject_people && (
                <>
                  <p>People: </p>
                  {data.subject_people.map((sub: string, idx: number) => {
                    return (
                      <h2
                        key={idx + "subject_people"}
                        className="mx-1 badge border  d-inline-block"
                      >
                        {sub}
                      </h2>
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BooDetails;
