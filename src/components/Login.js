import React , { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
library.add(fab);



function Login() {
  const firebaseConfig = {
    apiKey: "AIzaSyBuZvgxF3wISleUIQLO2QOcmo4SSqZYsq4",
    authDomain: "soulcalm-be33a.firebaseapp.com",
    projectId: "soulcalm-be33a",
    storageBucket: "soulcalm-be33a.appspot.com",
    messagingSenderId: "214845928876",
    appId: "1:214845928876:web:057d1109125891ac79b609",
    measurementId: "G-Z8KKRL7TGE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement Firebase login function
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, you can redirect the user to the desired page or perform any other action
        console.log('Login successful:', userCredential.user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  };


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
            <FontAwesomeIcon icon={['fab', 'google']} />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0" style={{paddingLeft:'350px'}}>Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password}
        onChange={(e) => setPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5 bg-success" size='lg' onClick={handleLogin}>Login</MDBBtn>
            <br/>
            <br/>
           {/* <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p> */}
            <Link to='/signup' className="text-sm font-medium text-center text-[#0F092D] hover:text-[#28FF64]">Don't have an account? <span className="link-danger">Register here</span></Link>
          </div>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default Login; 