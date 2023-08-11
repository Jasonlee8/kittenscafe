import React, { useState, useEffect } from 'react';
import {Form } from 'react-bootstrap'
import NavBar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import {LinkContainer} from 'react-router-bootstrap'
import { LoginContainer, LoginDiv, HeaderDiv, LoginForm, BtnPanel, CancelBtn, SubmitBtn, ErrorMsg } from './styles';
import jwtDecode from 'jwt-decode';
import { handleLoginApi } from '../../../api/UserApi';
import { handleUserValue } from '../../../store/actions/userActions';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';
import {MainContainer} from '../../../css'

export default function Login() {

    const [values, setValues] = useState({
      email: '',
      password: '',
      errorMessage: '',
      isLogin: false,
      invalidLogin: false,
    })

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'instant'});

      return () => {
        setValues({
          email: '',
          password: '',
          errorMessage: '',
          isLogin: false,
          invalidLogin: false,
        })
      }
    }, [])

    const onSubmit = async (e) => {
      e.preventDefault();
      if (values.email && values.password) {
        await handleLoginApi(values.email,values.password)
        .then(response => {
          values.isLogin = true;
          localStorage.setItem('token', JSON.stringify(response));   
          const decode = jwtDecode(response);
          console.log(decode);
          dispatch(handleUserValue(decode));
          //dispatch(loginStatus(isLogin));
          navigate('/menu');
        })
        .catch(function (error) {
            if (error.response || error.message == 'Request failed with status code 404') {
              setValues({
                ...values,
                invalidLogin: true,
                errorMessage: 'Email or Password not match, please try again'
              })
            }
        })
      } else {
        setValues({
          ...values,
          invalidLogin: (!values.email || !values.password) ? true : false,
          errorMessage: 'Please type correct email or password'
        })
      }
    }

    return (
        <MainContainer>
          <NavBar />
          <LoginContainer>
            <LoginDiv>
              <LoginForm>
                <br/>
                <HeaderDiv><h1>User Login</h1></HeaderDiv>  
                <Form 
                // onSubmit={
                //     (e) => this.onSubmit(e, this.state.email, this.state.password)}
                    >
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label >Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="Enter email" 
                            value={values.email}
                            onChange={onChange}             
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
            
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={values.password}
                            onChange={onChange}  
                        />
                        {/* <Form.Text className="text-muted" variant="danger">
                            {values.errorMessage}
                        </Form.Text> */}
                          {
                            values.invalidLogin &&
                            <ErrorMsg>{values.errorMessage}</ErrorMsg>
                          }
                    </Form.Group>

                    <LinkContainer to="/register">
                        <a alt="">Jump to Register</a> 
                    </LinkContainer>

                    <BtnPanel>
                      <LinkContainer to="/">
                          <CancelBtn variant="danger">
                              Cancel
                          </CancelBtn>
                      </LinkContainer>

                      <SubmitBtn variant="dark" type="submit" onClick={onSubmit}>
                          Submit
                      </SubmitBtn>
                    </BtnPanel>
                </Form>

              </LoginForm>
                
            
            </LoginDiv>
          </LoginContainer>
          <Footer />
        </MainContainer>
    )
}
