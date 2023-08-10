import styled from 'styled-components';
import { SiCoffeescript } from "react-icons/si";
import { Nav, Navbar, NavItem, Dropdown } from  'react-bootstrap';

export const NavbarContainer = styled.div`
        width: 100%;
        position: fixed;
        z-index: 999;
`

export const NavbarPanel = styled(Navbar)`
        display: flex;
        flex-direction: row;
        color: red;
`

export const NavbarsToggle = styled(Navbar.Toggle)`
        margin-left: .5rem;
        width: 3rem; 
        display: flex; 
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
          width: 2.6rem;
          height: 2.3rem;
          padding: .4rem;
          border-radius: .5rem;
        }
`

export const LogoPanel = styled.div`
        // width: 17rem;
        margin-right: auto;
      `

export const NavLinkPage = styled(NavItem)`
        margin-top: 0.2rem;
        margin-right: 4.5rem;
        text-align: center;
        cursor: pointer;
        color: white;
        @media screen and (min-width: 768px) and (max-width: 992px) {
          text-align: center;
          margin-right: 3rem;
        }
        @media (max-width: 767px) {
          text-align: center;
          margin-right: 0rem;
        }
      `

export const CafeIcon = styled(SiCoffeescript)`
        color: white;
        font-size: 2.2rem;
        cursor: pointer;
        margin-left: 1rem;
        margin-top: 0.1rem;
      `

export const FontDiv = styled.div`
        margin-left: 0.55rem;
        padding-top: 0.3rem;
        height: 2.3rem;
        font-family: "Papyrus";
        font-size: 1.5rem;
        width: 10rem;
        color: #fff;
      `

export const Avatar = styled.img`
        vertical-align: middle;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        margin-right: .5rem;
        object-fit: cover;
        @media (max-width: 767px) {
          // position: absolute;
          // right: 0;
        }
      `

export const RegiLink = styled(NavItem)`
        cursor: pointer;
        text-align: center;
        color: white;
        margin-right: 5rem;
        margin-top: .2rem;
        @media (min-width: 768px) and (max-width: 992px) {
          margin-right: 3rem;
          text-align: center;
        }
        @media (max-width: 767px){
          margin-right: 0rem;
          text-align: center;
          padding-top: .3rem;
        }
      `

export const LoginLink = styled(NavItem)`
        cursor: pointer;
        text-align: center;
        color: white;
        margin-right: 3rem;
        margin-top: .2rem;
        @media (max-width: 992px) {
          text-align: center;
          margin: .2rem 1rem auto auto;
        }
      `