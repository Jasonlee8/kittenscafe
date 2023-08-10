import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer';
import BrandLogo from '../../brandlogo/BrandLogo';
import { BrandDiv, OrderContainer, OuterDiv, ImgDiv, ManualDiv, OrderImage, CoffeeName, CoffeePrice, CoffeeDesp, Quantity, OrderPanel, DelBtn, AddBtn, CupsNumber, TotalPriceDisplayDiv, CancelBtn, OrderBtn, BtnPanel } from './styles'
import { getOrderItem, submitOrder, orderIdGenerater } from '../../../api/OrderApi'
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { MainContainer } from '../../../css';

function Order() {

  const {id} = useParams();
  console.log(id);
  const coffeeId = id;

  // const { match: {params} }  = props
  // const coffeeId = params.id

  const [values, setValues] = useState({
    maxOrderId: 1,
    orderAmount: 1,
    title: '',
    price: '',
    url: '',
    quantity: 0,
    totalPrice: 0,
    status: 'Pending'
  })

  const user = useSelector(state => state.user)

  const navigate = useNavigate();

  const handleIncrement = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      orderAmount: values.orderAmount + 1
    })
  }

  const handleDecrement = (e) => {
    e.preventDefault()
    if (values.orderAmount > 1){
      setValues({
        ...values,
        orderAmount: values.orderAmount - 1
      })
    } else {
      setValues({
        ...values,
        orderAmount: values.orderAmount
      })
    }  
  }

  // const getMaxOrderId = async () => { 
  //   await orderIdGenerater().then(res => res[0].maxOrderId)
  // }

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'});

    const getOrderItemInfo = async () => {
      const orderItem = await getOrderItem(coffeeId);
      const maxOrderId = await orderIdGenerater().then(res => 
        {
          if (!res[0]) {
            return 1;
          } else {
            return res[0].maxOrderId
          }
        }
        // res[0].maxOrderId
      )

      setValues({
        ...values,
        maxOrderId: maxOrderId,
        title: orderItem.title,
        price: orderItem.price,
        url: orderItem.url,
        quantity: orderItem.quantity,
      })
    }    
    getOrderItemInfo()
  }, [coffeeId])

  const onSubmit = async () => {
    const currentDate = new Date()
      await submitOrder(Number(coffeeId), {
        orderId: values.maxOrderId + 1,
        email: user.email,
        itemTitle: values.title,
        itemQuantity: values.orderAmount,
        totalPrice:  values.price * values.orderAmount,
        status: values.status,
        date: currentDate
      })
      navigate('/cart')
  }

  const onCancel = () => {
    navigate('/menu')
  }

  return (
    <MainContainer>
      <Navbar />

      <OrderContainer>
        <BrandDiv>
          <BrandLogo />
        </BrandDiv>
        <OuterDiv>
          <Row>
            <ImgDiv >
                <OrderImage src={process.env.REACT_APP_COFFEE_URL + values.title + '.jpg'} />
            </ImgDiv>
            <ManualDiv>
                <CoffeeName className="text-dark order-brandName">
                    <h3>{values.title}</h3>
                </CoffeeName>
                <CoffeePrice className="text-dark order-price">
                    <h6>Price: ${values.price}</h6>
                </CoffeePrice>
                <CoffeeDesp className="text-dark order-description">
                    <p>Descroption: <br/> </p>
                </CoffeeDesp>
                <Quantity>
                    <p>(Item Remaining: {values.quantity})</p>
                </Quantity>
                <OrderPanel>
                    <DelBtn variant="secondary" onClick={handleDecrement}>
                        <h1>-</h1>     
                    </DelBtn>
                    <CupsNumber>
                        <h1><b>{values.orderAmount}</b></h1>
                    </CupsNumber>
                    <AddBtn variant="secondary" onClick={handleIncrement}>
                        <h1>+</h1>
                    </AddBtn>
                </OrderPanel>
                <TotalPriceDisplayDiv>
                    <h5>Totol Price: ${
                      values.price * values.orderAmount > 0 ? 
                      values.price * values.orderAmount : 
                      '0.0'
                    }
                    </h5>
                </TotalPriceDisplayDiv>
                <BtnPanel>
                  <CancelBtn variant="danger" onClick={() => onCancel()}>
                        <p>Cancel</p>
                  </CancelBtn>
                  <OrderBtn variant="dark" 
                    onClick={(e) => 
                        { 
                            if (values.quantity < values.orderAmount) {
                                alert('Item storage is not enough!')
                                navigate('/order')
                            } else {
                                onSubmit()
                            }
                        }
                    }
                  >    
                    <p>Submit</p>
                  </OrderBtn>
                </BtnPanel>
            </ManualDiv>
          </Row>               
        </OuterDiv>
      </OrderContainer>
      <Footer />
    </MainContainer>
  )
}

export default Order
