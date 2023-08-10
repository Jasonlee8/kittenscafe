import React, {useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
// import { HeaderDiv } from '../../user/register/styles';
import {AboutContainer, SlogonDiv, SlogonContainer, SlogonItem} from './styles'
import {IconContainer, BrandDiv, IconImage} from '../../brandlogo/styles'
import Maps from '../../map/Maps';
import { MainContainer } from '../../../css';

const About = () => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

    return(
      <MainContainer>
        <Navbar />
        <AboutContainer>
          <SlogonDiv>
            <IconContainer>
              <BrandDiv style={{color: 'black'}}>Kittens Cafe</BrandDiv>
              <IconImage style={{color: 'black'}}/>
            </IconContainer>
            <SlogonContainer>
              <SlogonItem style={{marginLeft: '8%', marginTop: '2rem'}}> • Coffee is all about choice. </SlogonItem> 
              <SlogonItem style={{marginLeft: '6%'}}> • A cup of coffee can complete your day.</SlogonItem>
              <SlogonItem style={{marginLeft: '4%'}}> • What's life without coffee?</SlogonItem>
              <SlogonItem style={{marginLeft: '2%'}}> • Hot and fresh coffee all around.</SlogonItem>
              <SlogonItem style={{marginLeft: '0%'}}> • Wake up your taste buds.</SlogonItem>
              <SlogonItem style={{marginLeft: '-2%'}}>• Power up with coffee.</SlogonItem>
            </SlogonContainer>
              
          </SlogonDiv>

            <Maps />
          
        </AboutContainer>

        <Footer />
      </MainContainer>
    )
}

export default About;