import styled from 'styled-components';
import { Image, Button, Row } from 'react-bootstrap';

const orderImg = process.env.REACT_APP_ORDER_IMG;

 export const BrandDiv = styled.div`
    width: 40rem;
    height: 10rem;
    padding-top: 2.8rem;
    padding-left: 3.2rem;
    padding-top: 54px;
    @media (max-width: 767px) {
      padding-top: 80px;
      width: 24rem;
      padding-left: 2.6rem;
    }
  `

  export const OrderContainer = styled.div`
    background: url(${orderImg});
    width: 100%;
    background-size: cover;
    min-height: 60rem;
    max-height: 80rem;
  `

  export const OuterDiv = styled.div`
    background-color: #E8E8E8;
    min-width: 33rem;
    max-width: 56rem;
    min-height: 33rem;
    max-height: 80rem;
    margin: auto;
    margin-top: 1.9rem;
    position: relative;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      width: 90% !important;
      margin: 3rem auto auto auto;
      height: 28rem;
    }
    @media (max-width: 767px) {
      min-width: auto;
      width: 100%;
      margin-top: 0;
    }
  `

  export const ImgDiv = styled.div`
    min-height: 10rem;  
    max-height: 28rem;
    width: 28rem;
    margin-top: 2.5rem;
    margin-left: 2rem;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      width: 45% !important;
      height: 22rem;
    }
    @media (max-width: 767px) {
      width: 18rem !important;
      height: 12rem;
      padding: 0;
      background-color: #2b2b2b !important;
    }
  `

  export const ManualDiv = styled.div`
    width: 22rem;  
    height: 25rem;
    margin-top: 3rem;
    margin-left: 2.8rem;
    margin-bottom: 3.5rem;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      margin-left: 0.8rem !important;
      width: 45%;
      height: 22rem;
    }
    @media (max-width: 767px) {
      margin-top: 1.5rem;
    }
  `

  export const OrderImage = styled(Image)`
    margin-top: 0.5rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 767px) {
      margin-top: 0;
    }
  `

  export const CoffeeName = styled.div`
    text-align: left;
    width: 20rem;
    height: 2rem;
  `

  export const CoffeePrice = styled.div`
    text-align: left;
    width: 10rem;
    height: 1rem;
    margin-top: 1rem;
  `

  export const CoffeeDesp = styled.div`
    text-align: left;
    width: 18rem;
    height: 7.5rem;
    margin-top: 1.5rem;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      height: 5.5rem;
    }
    @media (max-width: 767px) {

    }
  `

  export const Quantity = styled.div`
    text-align: right;
    width: 100%;
    height: 2rem;
  `

  export const DelBtn = styled(Button)`
    width: 4rem;
    height: 4rem;
    @media (max-width: 767px) {
      width: 3.5rem;
      height: 3.5rem;
    }
  `

  export const AddBtn = styled(Button)`
    width: 4rem;
    height: 4rem;
    @media (max-width: 767px) {
      width: 3.5rem;
      height: 3.5rem;
    }
  `

  export const OrderPanel = styled(Row)`
    width: 100%;
    justify-content: space-between;
    margin: 0;
  `

  export const CupsNumber = styled.div`
    width: 4rem;
    height: 4rem;
    margin-top: 0.5rem;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      width: 3rem;
      height: 3rem;
    }
    @media (max-width: 767px) {
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `

  export const TotalPriceDisplayDiv = styled.div`
    width: 100%;
    text-align: right;
  `

  export const BtnPanel = styled(Row)`
    width: 100%;
    justify-content: space-around;
    margin: 0;
    margin-top: 3rem;
    @media screen and (min-width: 768px) and (max-width: 992px) {
      margin-top: 2rem;
    }
  `

  export const CancelBtn = styled(Button)`
    // margin-left: 2rem;
    width: 6rem;
    height: 2.5rem;
  `

  export const OrderBtn = styled(Button)`
    // margin-left: 6rem;
    width: 6rem;
    height: 2.5rem;
  `