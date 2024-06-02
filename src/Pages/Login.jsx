import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Header from "../Components/Header";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const history = useNavigate();

    async function login() {
        let userInfo = { email, password };
        let result = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        result = await result.json();
        if(result['error']) {
            setMsg(result['error']);
        } else {
            localStorage.setItem('userInfo', JSON.stringify(result));
            setMsg("Login Successfully");
            history("/dashboard");
        }
    }
  return (
    <>
        <Header/>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />

            <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <p>{msg}</p>

            <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
            />
            <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4" onClick={login}>Sign in</MDBBtn>

            <div className="text-center">
            <p>
                Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>

            <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
            >
                <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                >
                <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                >
                <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                >
                <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                >
                <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
            </div>
            </div>
        </MDBContainer>
    </>
  );
}
