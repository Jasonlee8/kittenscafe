import styled from 'styled-components';
import {Button} from 'react-bootstrap'

const loginImg = process.env.REACT_APP_REGILOGIN_IMG

export const LoginContainer = styled.div`
        background: url(${loginImg});
        width: 100%;
        height: 50rem;
        overflow: auto;
        background-size: cover;
        padding-top: 54px;
      `

export const HeaderDiv = styled.div`
        width: 20rem;
        height: 3rem;
        margin-bottom: 0.8rem;
        text-align: center
      `

export const LoginDiv = styled.div`
        background-color: #E8E8E8;
        width: 30rem;
        height: 22rem;
        margin: auto;
        margin-top: 10rem;
        border-radius: 1rem;
        @media (max-width: 767px) {
          width: 90%;
          margin: 10rem auto auto auto;
          border-radius: 10px;
        }
      `

export const LoginForm = styled.div`
        background-color: #E8E8E8;
        width: 20rem;
        height: 20rem;
        margin: auto
      `

export const BtnPanel = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding-top: 1rem;
`

export const CancelBtn = styled(Button)`
        width: 6rem;
        @media (max-width: 767px) {
          margin: 0;
        }
      `

export const SubmitBtn = styled(Button)`
        width: 6rem;
        @media (max-width: 767px) {
          margin: 0;
        }
      `