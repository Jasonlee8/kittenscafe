import styled from 'styled-components';
import { Button } from 'react-bootstrap'

const homeImg = process.env.REACT_APP_BACKGROUND_IMG;

export const HomeContainer = styled.div`  
        background: url(${homeImg});
        height: 65rem;
        background-size: cover;
        background-position: conter;
        padding-top: 54px;
      `
export const LogoContainer = styled.div`
        margin-top: 3.6rem;
        margin-left: 3.2rem;
        position: absolute
      `
    
export const ButtonContainer = styled.div`
        width: 20rem;
        height: 28rem;
        margin-left: 3rem;
        margin-top: 12rem;
        float: left;
      `

export const ButtonWrapper = styled.div`
        width: 20rem;
        height: 16rem;
        flex-direction: column;
        display: flex;
        margin: auto;
      `

export const ButtonMenu = styled(Button)`
        background-color: #a24504;
        border-color: #a24504;
        color: white;
        width: 13.8rem;
        height: 2.8rem;
        font-size: 1.2rem;
        display: flex;
        margin: auto;
        border-radius: 2rem;
        border-width: 0.1rem;
        justify-content: center
      `

export const ButtonNewMember= styled(Button)`
        background-color: #a24504;
        border-color: #a24504;
        color: white;
        width: 13.8rem;
        height: 2.8rem;
        font-size: 1.2rem;
        display: flex;
        margin: auto;
        border-radius: 2rem;
        border-width: 0.1rem;
        justify-content: center;
        margin-left: 1.5rem;
      `