import React from "react";
import Button from "react-bootstrap/Button";

const Articles = ({ articles }) => {
  const pdatesort = () => {
    articles.sort((a, b) => {
      return new Date(b.pdate) - new Date(a.pdate);
    });
  };

  const rsort = () => {
    articles.sort((a, b) => {
      return new Date(b.rating) - new Date(a.rating);
    });
  };

  return (
    <>
      <Button onClick={pdatesort}>Sort on the basis of Date</Button>
      <Button onClick={rsort}>Sort on the basis of Rating</Button>

      <div className="article">
        <table
          className="table table-striped table-inverse table-responsive"
          border="2px"
        >
          <thead className="thead-inverse">
            <tr>
              <th>Article</th>
              <th>Rating</th>
              <th>Publish Date</th>
            </tr>
          </thead>

          <tbody>
            {articles.map((article) => (
              <>
                <tr>
                  <td>{article.article}</td>
                  <td>{article.rating}</td>
                  <td>{article.pdate.slice(0, 10)}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Articles;
