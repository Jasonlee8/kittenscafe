import React, { useState, useEffect } from 'react';
// import BrandLogo from '../../brandlogo/BrandLogo';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer';
import { useDispatch, useSelector } from "react-redux";
import { ProfileContainer, ProfileDiv, AvatarImg, NewInput, EditDiv, UserAvatar, UserInfoDiv } from './styles';
import jwt_decode from 'jwt-decode';
import {Row, Form, Col, Button, Modal, Card, Offcanvas } from 'react-bootstrap';
import { upload, encodeImageFileAsURL, deleteFile, getAvatars} from '../../../api/UploadApi'
import { handleUserValue } from '../../../store/actions/userActions';
import { handleEditUserProfile } from '../../../api/UserApi';
import {MainContainer} from '../../../css'

export default function Profile() {

  const user = useSelector(state => state.user)
  // console.log(user);

  const dispatch = useDispatch()

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    telephone: 0,
    avatar: process.env.REACT_APP_AVATAR_IMG
  })
  const [show, setShow] = useState(false);
  const [attributes, setAttributes] = useState({
    avatarArr: [],
    display: false
  })

  const onChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
  }

  const handleClose = () => setAttributes({
    ...attributes,
    display: false
  });

  const handleShow = async (email) => setAttributes({
    avatarArr: await getAvatars(email),
    display: true
  });

  const uploadImage = async event => {
    const file = event.target.files;

    const imageBase64 = await encodeImageFileAsURL(
      file,
    );
    const image_url = await upload({
      folder: `images/uploads/${user.email}`,
      data: imageBase64,
      filename: file[0].name,
      email: jwt_decode(localStorage.getItem("token")).email
    })
    .then(res => dispatch(handleUserValue({
      ...user,
      avatar: res.avatar
    })))

    setValues({
      ...values,
      avatar: image_url
    })
  };

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  const onSubmit = async () => {
    dispatch(handleUserValue({
      ...user,
      first_name: values.first_name !== '' ? values.first_name : user.first_name,
      last_name: values.last_name !== ''  ? values.last_name : user.last_name,
      telephone: values.telephone !== 0  ? values.telephone : user.telephone,
    }))
    await handleEditUserProfile({
      first_name: values.first_name !== '' ? values.first_name : user.first_name,
      last_name: values.last_name !== ''  ? values.last_name : user.last_name,
      telephone: values.telephone !== 0  ? values.telephone : user.telephone,
      email: user.email,
    })
  }

  const getUserAvatar = (avatarKey) => {
    dispatch(handleUserValue({
      ...user,
      avatar: `${process.env.REACT_APP_UPLOADS_IMG}/${user.email}/${avatarKey}`
    }))
    window.location.reload()
  }

  return(
    <MainContainer>
      <Navbar />
      <ProfileContainer>
        {/* <ProfilePanel>
          <ProfileImage style={{backgroundImage: `url(${user.avatar}`}}></ProfileImage>
          <NamePanel>
            <FullNameForm>
              <p style={{textAlign: 'center'}}>Full Name:</p> 
              <p style={{textAlign: 'center', fontSize: '1.8rem'}}>{user.first_name} {user.last_name}</p>
            </FullNameForm>
            <EmailForm>
              <p style={{textAlign: 'center'}}>Email:</p>
              <p style={{textAlign: 'center', fontSize: '1.8rem'}}>{user.email}</p>
            </EmailForm>
          </NamePanel>
        </ProfilePanel> */}

        <ProfileDiv>
          <UserAvatar>
            <AvatarImg src={user.avatar} />

            {
              user.isLogin === true 
              ? 
              <EditDiv>
                <Row>
                  {/* <Image src={values.image_url} /> */}
                    <h6 style={{fontSize: "0.7rem", color: 'white'}}>Upload Avatar (Image size should be less than 150kb)</h6>
                    {/* <div style={{fontsize: '0.01rem', color: 'white'}}></div> */}
                </Row>
                <NewInput
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  onChange={uploadImage}
                  type="file"
                  style={{ fontSize: 12, color: 'white', marginLeft: 1 }}
                />  
              </EditDiv>
              :
              <div></div>
            }
          </UserAvatar> 

          <UserInfoDiv>
            <h1 style={{fontSize: '3.7rem', color: 'black', marginTop: '0.2rem'}}>{user.first_name}  {user.last_name}</h1>
            <h4 style={{color: 'black'}}>Email: {user.email}</h4>
            <h5 style={{color: 'black'}}>Tel: {parseInt(user.telephone)}</h5>
     
            <Button 
              disabled={user.isLogin === true ? false : true}
              variant="primary" 
              style={{marginTop: '0.7rem', marginLeft: '0.2rem'}} 
              onClick={() => handleShow(user.email)}
            >
              User Avatar
            </Button>

            <Offcanvas style={{width: '26rem'}} show={attributes.display} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>User Avatar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Row>
                {
                  Array.isArray(attributes.avatarArr) === true ?
                    attributes.avatarArr.map(image => (
                      <Card key={image._id} style={{  width: '7.8rem', 
                                                      height: '9.5rem', 
                                                      marginTop: "1rem",
                                                      marginLeft: "0.5rem",
                                                      borderColor: 'gold',
                                                      backgroundColor: 
                                                      `${process.env.REACT_APP_UPLOADS_IMG}/${user.email}/${image.avatar}` === user.avatar 
                                                      ? 'gold'  
                                                      : 'white' 
                                                  }}>
                          <Card.Img
                            className="mr-3"
                            src={`${process.env.REACT_APP_UPLOADS_IMG}/${user.email}/${image.avatar}`}
                            alt="Generic placeholder"
                            style={{ 
                              marginTop: '0.2rem',
                              width: '6.1rem',
                              height: '6.1rem',                           
                              borderRadius: '50%',
                              objectFit: 'cover'
                          }}/>
                          <Button 
                              disabled={`${process.env.REACT_APP_UPLOADS_IMG}/${user.email}/${image.avatar}` === user.avatar ? true : false}
                              style={{width: '5.2rem', height: '2rem', margin: '4.2rem 0 0 0.45rem', position: 'absolute', borderRadius: '0 0 2rem 2rem'}} 
                              onClick={() => getUserAvatar(image.avatar)} 
                              variant="info"
                            >
                              <h3 style={{fontSize: '0.49rem'}}>Choose</h3>
                            </Button >
                          <div style={{marginTop: '0.5rem', marginLeft: '0.2rem'}}>
                          <Row >
                            <Button variant="danger"
                              disabled={`${process.env.REACT_APP_UPLOADS_IMG}/${user.email}/${image.avatar}` === user.avatar ? true : false}
                              style={{width:'4rem', height: '1.8rem', margin: '0rem 0 0 1.6rem'}}  
                              onClick={() => deleteFile(image.avatar, image.filename)}>
                            <h3 style={{fontSize: '0.49rem'}}>Delete</h3>
                            </Button >
                            
                          </Row>
                          </div>
                      </Card>
                    )
                  )
                  :
                  <div></div>
                }
              </Row>
            </Offcanvas.Body>
          </Offcanvas>
              
            <Button 
              disabled={user.isLogin === true ? false : true}
              variant="primary" 
              style={{marginTop: '0.7rem',marginLeft: '1rem'}} 
              onClick={() => setShow(true)}
            >
              Edit Profile
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Edit Profile
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Form xs={2} md={4}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="ProfileFirstName">
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control 
                        name="first_name"
                        placeholder={user.first_name} 
                        onChange={onChange}
                        value={values.first_name}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="ProfileLastName">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control 
                        name="last_name"
                        placeholder={user.last_name} 
                        onChange={onChange}
                        value={values.last_name}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="ProfileTelephone">
                    <Form.Label>Telephone(optional)</Form.Label>
                    <Form.Control 
                      name='telephone'
                      placeholder={toString(user.telephone)} 
                      onChange={onChange}
                      value={values.telephone}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="ProfileBasicEmail">
                    <Form.Label>Email (Uneditable)</Form.Label>
                    <Form.Control placeholder={user.email} disabled/>
                  </Form.Group>
                  <br/>
                  <Button variant="primary" style={{float: 'right'}} type="submit" onClick={() => onSubmit()}>
                    Submit
                  </Button>

                </Form>
              </Modal.Body>
            </Modal>
          </UserInfoDiv>  
        </ProfileDiv>
      
        

      </ProfileContainer>
      <Footer />
    </MainContainer>  
  )
}

