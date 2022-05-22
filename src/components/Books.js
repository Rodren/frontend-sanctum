import React from "react";
import apiClient from "../services/api";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    apiClient
      .get("/api/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => { 
        if(error.response.status === 401) {
          navigate('/login');
        }
      });
  }, []);

  const bookList = books.map((book) => <li key={book.id}>{book.title}</li>);

  return <ul>{bookList}</ul>;
};

export default Books;
