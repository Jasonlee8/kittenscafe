import React, {useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import { LinkContainer } from 'react-router-bootstrap';
import { HomeContainer, LogoContainer, ButtonContainer, ButtonWrapper, ButtonNewMember, ButtonMenu } from './styles'
import  BrandLogo from '../../brandlogo/BrandLogo'
import {MainContainer} from '../../../css'

function Home() {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

    return (
      <MainContainer>
        <Navbar />
        <HomeContainer>

          <LogoContainer>
            <BrandLogo />
          </LogoContainer>
         
         
          <ButtonContainer>
            <ButtonWrapper>
              
              <LinkContainer to='/menu'>
                <ButtonMenu>Have a Cup</ButtonMenu>
              </LinkContainer>
              
              <LinkContainer to='/register'>
                <ButtonNewMember>Become a Member</ButtonNewMember>
              </LinkContainer> 
              
            </ButtonWrapper>
          </ButtonContainer>

        </HomeContainer>
        
        <Footer />

      </MainContainer>
    )
  
}

export default Home;

