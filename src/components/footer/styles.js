import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

 export const FooterContainer = styled.div`
          background-color: #242424;
          padding: 3.5rem 0 3.5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9;
        `

 export  const FooterLinks = styled.div`
          width: 100%;
          max-width: 62.5rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          @media (max-width: 992px) {
            display: flex;
            flex-direction: column;
          }
        `

 export const FooterLinkWrapper = styled(Row)`
          display: flex;
          align-items: flex-start;
          padding-bottom: 2rem;
        `

 export const FooterLinkItems = styled(Col)`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 12.9rem;
          box-sizing: border-box;
          padding-bottom: 2rem;
          @media (max-width: 767px) {
            flex-basis: 50%;
          }
          @media (min-width: 768px) {
            flex-basis: 25%;
          }
        `

 export const TitleFont = styled.h2`
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.5rem;
        `

 export const Links = styled(Link)`
          margin-top: 0.2rem;
          color: #fff
        `