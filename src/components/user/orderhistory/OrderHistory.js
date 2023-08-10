import React, {useState, useEffect} from 'react'
import moment from 'moment'
import NavBar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
// import { Table  } from 'react-bootstrap'
import Moment from 'react-moment'
import { TD1, TD2, TD3, HistoryContainer, TablePanel} from './styles'
import { getCart } from '../../../api/CartApi'
import { useSelector } from 'react-redux';

import {MainContainer} from '../../../css';

export default function OrderHistory() {
  
  const apiUrl = process.env.REACT_APP_COFFEE_URL
  const user = useSelector(state => state.user)

  const [values, setValues] = useState({
    isCaseClosed: false, 
    date: new Date(),
    cartArr: []
  })

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'});
    const getCartArrInfo = async () => {
      const cart = await getCart(user.email).then(res => 
        res.reverse().filter(function(res) {
        return moment().isAfter(moment(res.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(6, 'hours')) 
      }))
        setValues({
          ...values,
          cartArr: cart
        })
    }   
      getCartArrInfo()
    }
  , [])

  const setOrderStatus = (record) => {   
    const HistoryLimit = moment(record.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(6, 'hours')
    if (record.date !== null && record !== ' ' &&  record.isCaseClosed === true && moment().isAfter(HistoryLimit) ) {
      return  <div key={record.orderId}>
                <h5>Complete</h5>
              </div>  
    } else {
      return  <div key={record.orderId}>
                <h5>Wait to Grab</h5>
              </div>  
    }
  }
    // const { cartArr } = this.props
    const now = moment();

    const columns = [
      {
        title: 'Order No.',
        dataIndex: 'orderId',
        key: 'orderId',
      },
      {
        title: 'Item Name',
        dataIndex: 'itemTitle',
        key: 'itemTitle',
      },
      {
        title: 'Quantity',
        dataIndex: 'itemQuantity',
        key: 'itemQuantity',
      },
      {
        title: 'Start Date',
        dataIndex: 'date',
        key: 'date',
        render: date => {
          return <Moment format="YYYY-MM-DD HH:mm:ss">{date}</Moment>
        }
      },
      {
        title: 'Status',
        render: (_, record) => {
          return (now.isAfter(moment(record.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(1, 'hours'))) 
          ?
          setOrderStatus(record)
          :
          <div key={record.orderId}></div>
        }
      }
    ];

    return (
      <MainContainer>
        <NavBar />
        <HistoryContainer>

        <TablePanel dataSource={values.cartArr} columns={columns} rowKey='orderId'/> 

            {/* <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <TD1>Order No.</TD1>
                        <TD2>Item Name</TD2>
                        <TD1>Quantity</TD1>
                        <TD3>
                           Start Date
                        </TD3>
                        <TD2>Status</TD2>
                    </tr>
                </thead>
            </Table> */}

            {/* {values.cartArr.map(orderHistory => (
                (now.isAfter(moment(orderHistory.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').add(1, 'hours'))) 
                ?
                <div key={orderHistory._id}>
                <Table striped bordered hover size="sm">
                  <tbody>
                      <tr>
                          <TD1>No. {orderHistory.orderId}</TD1>
                          <TD2>{orderHistory.itemTitle}</TD2>
                          <TD1>{orderHistory.itemQuantity}</TD1>
                          <TD3>
                              <Moment format="YYYY-MM-DD HH:mm:ss">
                                  {orderHistory.date}
                              </Moment>
                          </TD3>
                          <TD2>{setOrderStatus(orderHistory)}</TD2>
                      </tr>
                  </tbody>
              </Table>
              </div>
              :
              <div key={orderHistory._id}>
              </div>
            ))
        } */}
      </HistoryContainer>
      <Footer />
    </MainContainer>
    )  

}
