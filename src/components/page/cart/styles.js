import styled from "styled-components";
import { Container, Row, Col, Image } from 'react-bootstrap'

const cartUrl = process.env.REACT_APP_CART_IMG

export const CartContainer = styled.div`
  background: url(${cartUrl});
  background-size: cover;
  background-position: conter;
  background-repeat: no-repeat;
  margin: 0;
  width: 100%;
  height: 67rem;
  overflow: hidden;
  padding-top: 54px;
`

export const CartDiv = styled(Container)`
  margin-top: 2rem;
  height: 63rem;
`

export const ProductItem = styled.div`
  background-color: #E8E8E8;
  margin-top: 1.2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TitleDiv = styled.div`
    margin-left: 1rem;
    margin-top: 1.2rem;
    height: 2rem;
    width: 2rem;
`

// export const ImageDiv = styled.div`
//     background-color: beige;
//     margin-top: 0.75rem;
//     height: 5.5rem;
//     width: 5.5rem;
// `

export const LineSpacing = styled(Col)`
  margin-top: 1.4rem
`

export const ItemImage = styled(Image)`
  width: 3.8rem;
  height: 3.8rem;
  margin: 0.4rem 0;
  object-fit: cover;
`

export const CartBrandName = styled.div`
  text-align: left;
  margin-top: 1.2rem;
  margin-left: 0.3rem;
  height: 1.5rem
`

export const TotalPrice = styled.div`
  margin: 1.2rem 0 1.2rem 0rem;
  @media (max-width: 991px) {
    margin: 0.25rem 0 0 2rem;
  }
`

export const OrderTime = styled.div`
  margin: 1.4rem 0 1.4rem -0.8rem;
  @media (max-width: 991px) {
    margin: 0.30rem 0 0 2rem;
  }
`

export const OrderStatus = styled.div`
  margin: 1.1rem 0 1.1rem 1rem;
  @media (max-width: 991px) {
    margin: 0 0 0.25rem 1.5rem;
  }
`
