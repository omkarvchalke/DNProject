import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [cred, setCred] =
  useState([{ docName: "Doctor1", docPass: "12345" }, { adminName: "Admin", docPass: "12345" }])
  const [docName,setdocName]=useState("")
  const [docPass,setdocPass]=useState("")
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
                <form action="../../index3.html" method="post">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Username"
                      value={docName}
                      onChange={(e) => setdocName(e.target.value)}
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
                      value={docPass}
                      onChange={(e) => setdocPass(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    {/* /.col */}
                    <div className="col-6">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block">
                            <Link to="/docLogin" className="text-center text-light">Doc Login</Link>
                          </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block">
                        <Link to="/adminLogin" className="text-center text-light">Admin Login</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Login;
