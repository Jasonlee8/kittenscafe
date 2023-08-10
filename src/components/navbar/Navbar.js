import React from "react";
import { LinkContainer  } from "react-router-bootstrap";
import { Navbar as Navbars, Nav, NavItem, Dropdown, DropdownButton} from 'react-bootstrap';
import { NavbarContainer, Avatar, NavLinkPage, LogoPanel, CafeIcon, FontDiv, AvaLink, NavbarsToggle, RegiLink, LoginLink } from './styles'
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutValue } from '../../store/actions/userActions'
import { useNavigate } from 'react-router-dom';
import { useCheckMobileScreen } from "../support/useCheckMobileScreen";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function Navbar() {

  //const avatarDefaultImg = process.env.REACT_APP_AVATAR_IMG
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobile = useCheckMobileScreen();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(handleLogoutValue());
    navigate('/login');
  };

  const navButton = (
    <Nav className="mr-auto" >
      <LinkContainer to='/'>
        <NavLinkPage>Home</NavLinkPage>
      </LinkContainer>
      <LinkContainer to='/menu'>
        <NavLinkPage>Menu</NavLinkPage>
      </LinkContainer>
      <LinkContainer to='/cart'>
        <NavLinkPage>Cart</NavLinkPage>
      </LinkContainer>
      <LinkContainer to='/about'>
        <NavLinkPage>About</NavLinkPage>
      </LinkContainer>
    </Nav>
  )

  const userLoginMenu = (
    <Nav className="ms-auto">
        <LinkContainer to='/login'>
            <LoginLink>Login</LoginLink>
        </LinkContainer>
    </Nav>
  )

  const userDropdown = (
    <Dropdown drop="left" style={{marginRight: '1rem', height: '2.1rem', display: 'flex', alignItems: 'center'}}> 
      <DropdownButton className='user' title={user.first_name} variant="info" align="end" style={{zIndex: '0', height: '2.3rem'}}>
        <Avatar src={user.avatar}  style={{cursor: 'pointer', position: 'absolute', right: '0'}}/> 
        <Dropdown.Item eventKey="1">
          <LinkContainer to='/profile'>
            <NavItem>Profile</NavItem>
          </LinkContainer>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <LinkContainer to="/history">
            <NavItem>Order History</NavItem>
          </LinkContainer>
        </Dropdown.Item>   
        <Dropdown.Item eventKey="3">
          <LinkContainer to="/register">
            <NavItem>Register</NavItem>
          </LinkContainer>
        </Dropdown.Item>   
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4" onClick={handleLogout}>
          Logout
        </Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  )

  return (
    
    <NavbarContainer>
      <Navbars collapseOnSelect expand="md" className="bg-dark">
        
        <LogoPanel style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {
          isMobile
          ?
          <NavbarsToggle aria-controls="responsive-navbar-nav" className="bg-light" />
          :
          <></>
        }
        {
          !isMobile
          ?
          <LinkContainer to='/'>
            <CafeIcon />           
          </LinkContainer>
          :
          <></>
        }   
          <FontDiv>Kittens Cafe</FontDiv>   
        </ LogoPanel>

        {
          isMobile
          ?
          <div style={{ width: 'fit-content', marginLeft: 'auto', position: 'relative'}}>
            { user.isLogin === false ? userLoginMenu : userDropdown}
          </div>
          :
          <></>
        }

        {
          !isMobile
          ?
          <Navbars.Toggle aria-controls="responsive-navbar-nav" className="bg-light" style={{margin: '0 0rem 0 1rem', fontSize: '13px'}}/>
          :
          <></>
        }
        
        <Navbars.Collapse id="responsive-navbar-nav" >
          {navButton}

          { user.isLogin === false ? 
            <Nav className="ms-auto">
                <LinkContainer to='/register'>
                    <RegiLink>Register</RegiLink>
                </LinkContainer>
            </Nav>
            :
            <></>
          }

        </Navbars.Collapse>

        {
          !isMobile
          ?
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: '1rem'}}>
            { user.isLogin === false ? <></> : 
                <Nav className="ms-auto">
                  <LinkContainer to='/profile'>
                    <NavItem>
                      <Avatar src={user.avatar}  style={{cursor: 'pointer'}}/> 
                    </NavItem>
                  </LinkContainer>
                </Nav>
            }
            
              { user.isLogin === false ? userLoginMenu : userDropdown}
            
          </div>
          :
          <></>
        }
        
      </Navbars>
    </NavbarContainer>
  )
}

export default Navbar;


      