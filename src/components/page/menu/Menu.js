import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom'
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import BrandLogo from '../../brandlogo/BrandLogo';
import { MenuContainer, CardItemPanel, CardDev, PurchaseBtn, CardImg, CardBody, CardTitle, CardSubtitle, NewRow } from './styles'
import { getMenu } from '../../../api/MenuApi';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../../css';

export default function Menu() {

  const [values, setValues] = useState({
    id: 0,
    title: '',
    price: 0,
    description: '',
    quantity: 0,
    image: '',
    menuArr: []
  });

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'});
    const getMenuInfo = async () => {
      const menuInfo = await getMenu()
      setValues({
        ...values,
        menuArr: menuInfo
      })
    } 
    getMenuInfo()
  }, []);

  const user = useSelector(state => state.user);

  return (
    <MainContainer>
      <Navbar />

      <MenuContainer>
        <NewRow xs={2} sm={2} md={3} lg={4}>
          {values.menuArr.map(values => 
            (
            <CardItemPanel key={values._id}>
              <CardDev >
                <CardImg src={process.env.REACT_APP_COFFEE_URL + values.title + '.jpg'} />
                <div style={{display: 'flex', flexDirection: "row"}}>
                  <CardBody>
                    <CardTitle>{values.title}</CardTitle>
                    <CardSubtitle>{'Price: $' + values.price}</CardSubtitle>
                  </CardBody >
            
                  <Link to={`/order/${values.id}`}>
                    <PurchaseBtn style={{display: !`${user.first_name}` && !`${user.last_name}` ? 'none' : 'block'}}>
                      {/* <Link to={{path: `/order/${values.id}`, query:{id: `${values.id}`}}}>
                        <p>Buy</p>
                      </Link> */}                
                        <span>Buy</span> 
                    </PurchaseBtn>
                  </Link>
                  
                </div>       
              </CardDev>
            </CardItemPanel>
            ))
          }
          
        </NewRow>

        <BrandLogo />

      </MenuContainer>

      <Footer />
    </MainContainer>

  )
}