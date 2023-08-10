import styled from 'styled-components';
import {Row, Button, Card} from 'react-bootstrap'

const menuImg = process.env.REACT_APP_MENU_IMG;
      
export const MenuContainer = styled.div`
    background: url(${menuImg});
    width: 100%;
    // height: 67rem;
    overflow: hidden;
    background-size: cover
    display: felx;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-top: 54px;
    position: relative;
  `

export const PurchaseBtn = styled(Button)`
    position: absolute;
    bottom: .8rem;
    right: .5rem;
    width: 4.2rem;
    height: 2.4rem;
    // border-width: 0.1rem;
    border-radius: 3rem;
    @media (max-width: 767px) {
      width: 3.3rem;
      height: 1.9rem;
      font-size: 11px;
      bottom: .5rem;
    }
  `

export  const NewRow = styled(Row)`
      margin-right: 2rem;
      margin-left: 2rem;
      // height: 59rem;
      padding-top: 3rem;
      @media (max-width: 767px) {
        margin: 0 3%;
      }
  `

export const CardItemPanel = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        padding: 0 2%;
      }
`

export const CardDev = styled(Card)`
      width: 17rem;
      margin-bottom: 3.2rem;
      z-index: 9;
      @media (max-width: 767px) {
        margin-bottom: 2.6rem;
      }

`

export const CardImg = styled(Card.Img)`
      height: 12.3rem; 
      object-fit: cover; 
      cursor: pointer;
      @media (max-width: 767px) {
        height: 9.6rem;
      }
`

export const CardBody = styled(Card.Body)`
      max-width: 12rem;
      height: 4.7rem;
      padding-top: 0.4rem;
      @media (max-width: 767px) {
        height: 3.8rem;
      }
`

export const CardTitle = styled(Card.Title)`
      max-width: 12rem;
      @media (max-width: 767px) {
        font-size: 14px;
      }
`

export const CardSubtitle = styled(Card.Subtitle)`
      max-width: 12rem;
      @media (max-width: 767px) {
        font-size: 11px;
      }
`

