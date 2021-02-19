import apiClient from "./client";

export interface IBook {
  cover_i: number;
  has_fulltext: boolean;
  edition_count: number;
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
  ia: string[];
  author_key: string[];
  public_scan_b: boolean;
}

// Generated by https://quicktype.io

export interface IBookDetails {
  description: string;
  title: string;
  covers: number[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  key: string;
  authors: Author[];
  subject_times: string[];
  type: Type;
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
}

export interface Author {
  author: Type;
  type: Type;
}

export interface Type {
  key: string;
}

export interface Created {
  type: string;
  value: string;
}

export const getBookDetails = (type: string, key: string) =>
  apiClient.get(`/${type}/${key}.json`);
export const searchBook = (q: string) => apiClient.get(`/search.json?q=${q}`);
