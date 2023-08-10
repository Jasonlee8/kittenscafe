import styled from 'styled-components';

const aboutImg = process.env.REACT_APP_ABOUT_IMG

export const AboutContainer = styled.div`
  background: url(${aboutImg});
  width: 100%;
  height: 57rem;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 54px;
  @media (max-width: 992px) {
    height: auto;
    padding-bottom: 6rem;
  }
` 

export const SlogonDiv = styled.div`
  margin-top: 5%;
  margin-left: 12%;
  width: 30rem;
  // height: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 8%;
  }
`

export const SlogonContainer = styled.div`
  margin-top: 6rem;
  @media (max-width: 767px) {
    margin-top: 3rem;
  }
`

export const SlogonItem = styled.h3`
  font-family: "Papyrus";
  display: flex;
  margin-top: 5%
` 


export const MapsContainer = styled.div`
  @media (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
`