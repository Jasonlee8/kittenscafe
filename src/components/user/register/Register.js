import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import NavBar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import {LinkContainer} from "react-router-bootstrap";
import {useNavigate} from "react-router-dom";
import { RegiContainer, HeaderDiv, RegiForm, RegiContext, BtnPanel, CancelButton, RegiButton, ErrorMsg} from './styles'
import { handleRegister } from '../../../api/UserApi';
import { MainContainer } from '../../../css';

export default function Register() {

  const avatarImg = process.env.REACT_APP_AVATAR_IMG;

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    avatar: avatarImg,
    invalidFirstname: false,
    invalidLastname: false,
    invalidEmail: false,
    invalidPassword: false,
    invalidEmailMsg: 'Please type a valid email',
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})

    return () => {
      setValues({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        avatar: avatarImg,
        invalidFirstname: false,
        invalidLastname: false,
        invalidEmail: false,
        invalidPassword: false,
        invalidEmailMsg: 'Please type a valid email',
      })
    }
  }, [])

  const onChange = (e) => {
    e.preventDefault();
    let invalidItem = 'invalid' + e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      [invalidItem]: false,
    })
  }

  const checkValidEmail = (email) => {
    let format = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (email && format) {
      return true
    }
  }

  const onSubmit = async () => {
    setValues({
      ...values,
      invalidFirstname: !values.firstname ? true : false,
      invalidLastname: !values.lastname ? true : false,
      invalidEmail: !checkValidEmail(values.email) ? true : false,
      invalidPassword: !values.password ? true : false,
    })

    if (values.firstname && values.lastname && checkValidEmail(values.email) && values.password) {
      await handleRegister({
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        password: values.password,
        avatar: values.avatar,
      }).then(res => {
        if (res.error == 'User already exists') {
          setValues({
            ...values,
            invalidEmail: true,
            invalidEmailMsg: 'Email has been registered, please try another one'
          })
        } else {
          navigate('/login');
        }
      })
    }
  }

  return(
    <MainContainer>
      <NavBar />
      <RegiContainer>
        <RegiForm>
          <RegiContext>
            <br/>
            <HeaderDiv><h1>Register</h1></HeaderDiv>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name:</Form.Label>
                <Form.Control 
                          name="firstname"
                          placeholder="Enter your firstname"
                          value={values.firstname}
                          onChange={onChange}
                />
                {
                  values.invalidFirstname &&
                  <ErrorMsg>Please type a valid firstname</ErrorMsg>
                }
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{marginTop: '0.8rem'}}>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control 
                          name="lastname"
                          placeholder="Enter your lastname"
                          value={values.lastname}
                          onChange={onChange}
                />
                {
                  values.invalidLastname &&
                  <ErrorMsg>Please type a valid lastname</ErrorMsg>
                }
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{marginTop: '0.8rem'}}>
                <Form.Label>Email address</Form.Label>
                  <Form.Control 
                      type="email"
                      name="email" 
                      placeholder="Enter your email" 
                      value={values.email}
                      onChange={onChange}
                  />
                  {
                    values.invalidEmail &&
                    <ErrorMsg>{values.invalidEmailMsg}</ErrorMsg>
                  }
                  <Form.Text className="text-muted">
                    We'll never share your details with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group style={{marginTop: '0.3rem'}} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                  <Form.Control 
                      type="password"
                      name="password" 
                      placeholder="Password" 
                      value={values.password}
                      onChange={onChange}
                  />
                  {
                    values.invalidPassword &&
                    <ErrorMsg>Please type a valid password</ErrorMsg>
                  }
              </Form.Group>

              <BtnPanel>
                <LinkContainer to="/">
                    <CancelButton variant="danger">
                        Cancel
                    </CancelButton>
                </LinkContainer>

                <RegiButton variant="dark" onClick={onSubmit}>
                    Submit
                </RegiButton>
           
              </BtnPanel>
            </Form>
          </RegiContext>
        </RegiForm>
      </RegiContainer>
      
      <Footer />
    </MainContainer>
  )
}