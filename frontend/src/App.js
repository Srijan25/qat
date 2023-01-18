import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form";
import Main from "./components/main";
import Articles from "./components/articles";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [articles, setArticles] = useState([]);
    

    useEffect(() => {
    Axios.get("http://localhost:5000/getarticle").then((response) => {
      setArticles(response.data);
      // console.log(response.data);
      


    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Form />} />
          <Route exact path="/main" element={<><Main /><Articles articles={articles}/></>} />
        </Routes>
      </BrowserRouter>
      {/* <Articles articles={articles}/> */}
    </div>
  );
}

export default App;
