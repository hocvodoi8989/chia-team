import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

import "./style.css"
import logo from "./logo1.png"
import image from "./team.jpg"

const Login = () => {
  
  const [username, setUsername] = useState('')
  // const history = useHistory()
  
  // const handleLogin = () => {
  //   history.push('../TeamDivision/index.js')
  // }

    return (
        <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={logo} className="logo" alt="logo" />

                        <h4 className="mt-1 mb-5 pb-1">
                          We are the Football Club
                        </h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="use-name"
                            className="form-control"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                          />{""}
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                          />
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                            // onclick={handleLogin}
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger ml-2"
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 align-items-center gradient-custom-2 position-relative history">
                    <img src={image} className="imageTeam position-absolute" alt="imageTeam" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Login;