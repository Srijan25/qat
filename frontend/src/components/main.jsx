import React, { useState } from "react";
import "../css/main.css";
import Button from "react-bootstrap/Button";
import act from "../jsfile/main";
import Axios from "axios";

const Main = () => {
  const [article, setArticle] = useState("");
  const [rating, setRating] = useState("");
  const [pdate, setPDate] = useState("");
  // const [articles, setArticles] = useState([]);

  const AddArticle = () => {
    Axios.post("http://localhost:5000/addarticle", {
      article: article,
      rating: rating,
      pdate: pdate,
    }).then((response) => {
      console.log(response);
    });
  };
  function refreshPage() {
    window.location.reload(false);
  }

  // useEffect(() => {
  //   Axios.get("http://localhost:5000/getarticle").then((response) => {
  //     setArticles(response.data);
  //     console.table(response.data);
  //   });
  // }, []);

  return (
    <>
      <h1>Welcome to main page</h1>
      <Button className="add" onClick={act}>
        Add new Article
      </Button>
      <div id="form" className="form">
        <input
          type="text"
          name="article"
          id="article"
          placeholder="Enter Article Name"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="date"
          name="publish"
          id="publish"
          placeholder="Publish Date"
          value={pdate}
          onChange={(e) => setPDate(e.target.value)}
        />
        <Button
          type="submit"
          onClick={() => {
            act();
            AddArticle();
            refreshPage();
          }}
        >
          Add
        </Button>
      </div>
      
    </>
  );
};

export default Main;
