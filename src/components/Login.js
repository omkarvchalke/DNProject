import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let history = useHistory();

  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  const Validate = (e) => {
    e.preventDefault();
    // console.log(cred[0][1]);
    if (!pass || !uname) {
      alert("Please enter all fields");
      return;
    } else {
      if (uname === "Doctor" && pass === "doctor123") {
        history.push("/docLogin");
      } else if (uname === "Admin" && pass === "admin123") {
        history.push("/adminLogin");
      } else {
        alert("Invalid Credentials");
      }
    }
    // addPatients({ pname, page, pcontact });

    console.log("Uname Pass print :", uname, pass);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="box-right">
            {/*goes to right of page*/}

            <div className="login-box">
              <div className="login-logo">
                <a href="../../index2.html">
                  <b>Login</b>
                </a>
              </div>
              {/* /.login-logo */}

              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form
                  action="../../index3.html"
                  method="post"
                  onSubmit={Validate}
                >
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={uname}
                      onChange={(e) => setUname(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                 
                    <button type="submit" className="btn btn-primary btn-block">
                      LOGIN
                    </button>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
