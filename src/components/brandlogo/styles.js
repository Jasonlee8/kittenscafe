import styled from 'styled-components';
import { SiCoffeescript } from "react-icons/si";

export const IconContainer = styled.div`
        width: 35rem;
        height: 5.8rem;
        padding: 1rem;
        display: flex;
        @media (max-width: 767px) {
          width: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      `

export const BrandDiv = styled.div`
        color: #fff;
        width: 29rem;
        font-size: 5rem;
        font-family: "Papyrus";
        display: flex;
        @media (max-width: 767px) {
          width: 16rem;
          font-size: 42px;
        }
      `

export const IconImage = styled(SiCoffeescript)`
        color: #fff;
        width: 3rem;
        height: 3rem; 
        margin-top: 2.8rem;
        position: relative;
        display: flex;
        @media (max-width: 767px) {
          width: 2.6rem;
          height: 2.6rem; 
          margin-top: 0.2rem;
          margin-left: .5rem;
        }
      `