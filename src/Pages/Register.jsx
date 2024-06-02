import Header from '../Components/Header';
import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
//   MDBCheckbox
}
from 'mdb-react-ui-kit';

export default function Register () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [msg, setMsg] = useState("");

    async function signUp() {
        if(name !== "" && email !== "" && password !== "" && cpassword !== ""){
            if(password === cpassword){
                let userInfo = {name, email, password};
                let result = await fetch('http://localhost:8000/api/register', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(userInfo),
                })
                result = await result.json();
                console.log(result);
                setMsg("Registration Successfully");
            } else {
                setMsg("Password does not match with confirm password");
            }
        } else {
            setMsg("All inputs are required");
        }
    }
    
    return (
        <>
            <Header/>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                    <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
                    <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' onChange={(e)=>setCPassword(e.target.value)} value={cpassword}/>
                    {/* <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div> */}
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={signUp}>Register</MDBBtn>
                    <p>{msg}</p>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    )
}