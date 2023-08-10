import React, {useEffect, useState, useCallback} from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { CartContainer, ProductItem, TitleDiv, LineSpacing, TotalPrice, ItemImage, CartBrandName, OrderTime, OrderStatus, CartDiv} from './styles'
import Moment from 'react-moment';
import moment from 'moment'
import { getCart } from '../../../api/CartApi';
import { useSelector } from 'react-redux';
import {Col, Button} from 'react-bootstrap'
import { pickUpOrder } from '../../../api/OrderApi';
import { MainContainer } from '../../../css';

export default function Cart() {

  const user = useSelector(state => state.user)

  const [values, setValues] = useState({
    orderId: 0,
    email: '',
    itemTitle: '',
    itemQuantity: 0,
    totalPrice: 0,
    isCaseClosed: false, 
    date: new Date(),
    cartArr: []
  })

  const apiUrl = process.env.REACT_APP_COFFEE_URL;

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
    const getCartArrInfo = async () => {
      const cart = await getCart(user.email).then(res => res.reverse())
        setValues({
          ...values,
          cartArr: cart
        })
    }   
      getCartArrInfo()
    }
  , [])

  const onSubmit = async (cart) => {
      await pickUpOrder({
        orderId: cart.orderId,
        email: cart.email
      })
    window.location.reload()
  }

  console.log(values.cartArr)
 
  const setOrderStatus = (cart) => {
    const recivingLimit = moment(cart.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(3, 'minutes');
    const pendingLimit = moment(cart.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(7,'minutes');
    const now = moment();
    if (cart.date !== null && cart !== " " && now.isBefore(recivingLimit)) {
      return  <div>
                <h3>Received</h3>
              </div>
    } else if (cart.date !== null && cart !== " " && now.isAfter(recivingLimit) && now.isBefore(pendingLimit)) {
      return  <div>
                <h3>Pending</h3>
              </div>
    } else {
      return  cart.isCaseClosed === true ?
              <div>
                <h3>Complete</h3>
              </div>
              :
              <Button variant="success" onClick={() => onSubmit(cart)}>
                Pick Up
              </Button>
    }
  }

  const setCaseClosed = () => {
    setValues({
      ...values,
      isCaseClosed: true
    })
  }

  return (
    <MainContainer>
      <Navbar />
      <CartContainer>
        <CartDiv>
        {values.cartArr.map(cart => 

          (cart.isCaseClosed === true &&
            moment().isAfter(moment(cart.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(6, 'hours')) 
            ?
            <div key={cart._id}/>
            :
            <div key={cart._id}>
              <ProductItem>
                  <Col xs={2} sm={2} md={2} lg={1}>
                    <TitleDiv>         
                        <h3>#{cart.orderId}</h3>   
                    </TitleDiv>                 
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={1}>
                    <ItemImage src={
                        apiUrl + `${cart.itemTitle}.jpg`.replace(' ', '')
                        //require(`../../images/${cart.itemTitle}.jpg`)
                    } />
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={4}>
                    <CartBrandName>
                        <h3>{cart.itemTitle} x {cart.itemQuantity}</h3>
                    </CartBrandName>
                  </Col>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <TotalPrice>
                      <h3 style={{fontWeight: 'bold'}}>$ {cart.totalPrice}</h3>
                    </TotalPrice>
                  </Col>
                  <Col xs={5} sm={5} md={7} lg={2}>
                    <OrderTime>
                      <Moment format="YYYY-MM-DD HH:mm:ss">
                        {cart.date}
                      </Moment>
                    </OrderTime>
                  </Col>
           
                <Col xs={3} sm={3} md={2} lg={2}>
                  <OrderStatus>
                    {setOrderStatus(cart)}
                  </OrderStatus>
                </Col>
              </ProductItem>

            </div>
          )
        )}
        </CartDiv>
      </CartContainer>
      <Footer />
    </MainContainer>
  )
}