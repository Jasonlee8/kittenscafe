import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import NavBar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import {LinkContainer} from "react-router-bootstrap"
import { RegiContainer, HeaderDiv, RegiForm, RegiContext, BtnPanel, CancelButton, RegiButton} from './styles'
import { handleRegister } from '../../../api/UserApi';
import { MainContainer } from '../../../css';

export default function Register() {

  const avatarImg = process.env.REACT_APP_AVATAR_IMG;

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    avatar: avatarImg
  });

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  const onChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async () => {
    await handleRegister({
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      password: values.password,
      avatar: values.avatar,
    })
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
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{marginTop: '0.8rem'}}>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control 
                          name="lastname"
                          placeholder="Enter your lastname"
                          value={values.lastname}
                          onChange={onChange}
                />
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
              </Form.Group>

              <BtnPanel>
                <LinkContainer to="/">
                    <CancelButton variant="danger">
                        Cancel
                    </CancelButton>
                </LinkContainer>

                <LinkContainer to="/login">
                    <RegiButton variant="dark" onClick={onSubmit}>
                        Submit
                    </RegiButton>
                </LinkContainer>
              </BtnPanel>
            </Form>
          </RegiContext>
        </RegiForm>
      </RegiContainer>
      
      <Footer />
    </MainContainer>
  )
}