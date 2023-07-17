import React , { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBRadio
}
from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

function Signup() {
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = () => {
    setError(null); // Reset any previous error messages

    // Validate the input fields
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Implement Firebase signup function
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signup successful, you can redirect the user to the desired page or perform any other action
        console.log('Signup successful:', userCredential.user);
      })
      .catch((error) => {
        // Handle signup error and set the error state
        setError(error.message);
      });
  };

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column'>

              <p style={{paddingleft:'250px'}} classNAme="text-center align-items-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><strong><h2>Sign up</h2></strong></p>

              <div className="d-flex flex-row align-items-center mb-2 " >
              <FontAwesomeIcon icon={faUser} style={{paddingleft:'250px'}}/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'  value={name}
                onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} />
                <MDBInput label='Your Email' id='form2' type='email' className='w-100' value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon icon={faLock} /> 
                <MDBInput label='Password' id='form3' type='password' className='w-100' value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <MDBBtn className='mb-4 bg-success' size='lg' onClick={handleSignup}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;