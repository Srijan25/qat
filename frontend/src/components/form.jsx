import React, { useState } from "react";
import "../css/form.css";
import clck from "../jsfile/form";
import Axios from "axios";
import { useNavigate} from "react-router-dom"
function Form() {
  const [uname, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [lemail, setLEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [lpassword, setLPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const navigate=useNavigate()

  const Register = () => {
    Axios.post("http://localhost:5000/register", {
      name: uname,
      email: email,
      phone: phone,
      password: password,
      confirm_password: confpassword,
    }).then((response) => {
      console.log(response);
      navigate("/")
    });
  };

  const Login = () => {
    Axios.post("http://localhost:5000/login", {
      
      email: lemail,
      
      password: lpassword,
      
    }).then((response) => {
      const {data}= response;

      console.log(data);
      console.log(response);
      if (data.status==="Authorised") {
        navigate("/main")
      } else {
        console.log("Error")
      }
    });
  };



  //   const Register = () => {
  //     fetch("http://localhost:5000/register", {
  //         method: "POST",
  //         body: JSON.stringify({
  //             uname,
  //             email,
  //             password,
  //             phone,
  //             confpassword,
  //         }),
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //     })
  //         .then((res) => res.json())
  //         .then((data) => {
  //             console.log(data);
  //         })
  //         .catch((err) => console.error(err));
  // };
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,
						  initial-scale=1.0"
        />
        <title>Cyber Range</title>
        <link rel="form" href="form.css" />
        <header>
          <h1 className="heading">Internship</h1>
          <h3 className="title">Login &amp; Registration Form</h3>
        </header>

        <div className="container">
          <div className="slider" />
          <div className="btn">
            <button className="login" onClick={clck}>
              Login
            </button>
            <button className="signup" onClick={clck}>
              Signup
            </button>
          </div>

          <div className="form-section">
            {/* login form */}
            {/* <form> */}
            <div className="login-box">
              <input
                type="email"
                className="email ele"
                placeholder="youremail@email.com"
                value={lemail}
                onChange={(e) => setLEmail(e.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
                value={lpassword}
                onChange={(e) => setLPassword(e.target.value)}
              />
              <button className="clkbtn" onClick={Login}>Login</button>
            </div>
            {/* </form> */}
            {/* signup form */}
            {/* <form onSubmit={Register}> */}
            <div className="signup-box">
              <input
                type="text"
                className="name ele"
                placeholder="Enter your name"
                value={uname}
                onChange={(e) => setUName(e.target.value)}
              />
              <input
                type="email"
                className="email ele"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="phone ele"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Confirm password"
                value={confpassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <button className="clkbtn" onClick={Register}>
                Signup
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
