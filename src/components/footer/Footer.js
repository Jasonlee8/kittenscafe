import React from 'react';
import { FooterContainer, FooterLinks, FooterLinkWrapper, FooterLinkItems, TitleFont, Links} from './styles';

export default function Footer() {

  return (
    <FooterContainer>
        <FooterLinks>
          <FooterLinkWrapper>
            <FooterLinkItems sm={6}>
              <TitleFont>About Us</TitleFont>
              <Links to='/register'>How it works</Links>
              <Links to='/'>Testimonials</Links>
              <Links to='/'>Careers</Links>
              <Links to='/'>Investors</Links>
              <Links to='/'>Terms of Service</Links>
            </FooterLinkItems>  
            <FooterLinkItems sm={6}>
              <TitleFont>Contact Us</TitleFont>
              <Links to='/'>Contact</Links>
              <Links to='/'>Support</Links> 
              <Links to='/'>Destinations</Links>
              <Links to='/'>Sponsorships</Links>
            </FooterLinkItems>  
            <FooterLinkItems sm={6}>
              <TitleFont>Videos</TitleFont>
              <Links to='/'>Submit Video</Links>
              <Links to='/'>Agency</Links>
              <Links to='/'>Ambassadors</Links>
              <Links to='/'>Influencer</Links>
            </FooterLinkItems> 
            <FooterLinkItems sm={6}>
              <TitleFont>Social Media</TitleFont>
              <Links to='/'>Instagram</Links>
              <Links to='/'>Facebook</Links>
              <Links to='/'>Youtube</Links>
              <Links to='/'>Twitter</Links>
            </FooterLinkItems> 
          </FooterLinkWrapper>
        </FooterLinks>  
      </FooterContainer>
  )
}