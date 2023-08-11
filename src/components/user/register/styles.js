import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const regiImg = process.env.REACT_APP_REGILOGIN_IMG

export const RegiContainer = styled.div`
        background: url(${regiImg});
        width: 100%;
        height: 50rem;
        overflow: auto;
        background-size: cover;
        padding-top: 54px;
        @media (max-width: 767px) {
          height: 40rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `
export const HeaderDiv = styled.div`
        width: 20rem;
        height: 3rem;
        margin-bottom: 0.8rem;
        text-align: center
      `

export const RegiForm = styled.div`
        background-color: #E8E8E8;
        width: 30rem;
        height: auto;
        margin: auto;
        margin-top: 6.2rem;
        border-radius: 1rem;
        @media (max-width: 767px) {
          width: 90%;
          height: auto;
          margin: 0 auto;
          border-radius: 1rem;
        }
      `

export const RegiContext = styled.div`
        background-color: #E8E8E8;
        width: 20rem;
        height: auto;
        margin: auto;
        @media (max-width: 767px) {
          width: 90%;
          height: auto;
          border-radius: 1rem;
          
        }
      `

export const BtnPanel = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 2rem 0;
`

export const CancelButton = styled(Button)`
        width: 6rem;
        @media (max-width: 767px) {
          margin: 0;
        }
      `

export const RegiButton = styled(Button)`
        width: 6rem;
        @media (max-width: 767px) {
          margin: 0;
        }
      `

export const ErrorMsg = styled.p`
        margin: 0;
        color: red;
        font-size: 14px;
      `