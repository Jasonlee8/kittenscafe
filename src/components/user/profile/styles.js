import styled from 'styled-components';

const profileImg = process.env.REACT_APP_PROFILE_IMG 

export const ProfileContainer = styled.div`
        background: url(${profileImg});
        width: 100%;
        height: 50rem;
        overflow: auto;
        background-size: cover;
        padding-top: 54px;
      `

export const ProfilePanel = styled.div`
      width: 60rem;
      height: 40rem;
      // background-color: white;
      margin: 5rem auto auto auto;
      @media (max-width: 992px) {
        width: 100%;
        margin: 2rem auto auto auto;
      }
    `

export const ProfileImage = styled.div`
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 50%;
    // background-color: grey;
    background-size: cover;
    margin: 0 auto;
  ` 

export const NamePanel = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  ` 

export const FullNameForm = styled.div`
    width: 28rem;
    height: 5rem;
    margin: 2rem auto auto auto;
  ` 

export const EmailForm = styled.div`
    width: 28rem;
    height: 5rem;
    margin: 2rem auto auto auto;
  ` 

export const ProfileDiv = styled.div`
      margin-left: 12%;
      height: 18rem;
      margin-top: 5%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      @media (max-width: 767px) {
        width: 100%;
        justify-content: center;
        margin: 2rem auto auto auto;
      }
    `

export const EditDiv = styled.div`
        width: 16.5rem;
        display: flex;
        flex-direction: column;
        margin-left: -1.2rem;
        padding-top: 1rem;
      `

export const UserInfoDiv = styled.div`
        width: 30rem;
        margin-left: 5%;
        height: 15rem;
        @media (max-width: 855px) {
          width: 30rem;
          margin-left: 0%;
          text-align: center;
        }
      ` 

export const UserAvatar = styled.div`
        width: 13.8rem;
        height: 18rem;
        @media (max-width: 855px) {
          text-align: center;
        }
      `

export const AvatarImg = styled.img`
        background-color: grey;
        // background-size: cover;
        object-fit: cover;
        width: 12.2rem;
        height: 12.2rem;
        border-radius: 6.4rem;
        margin-top: 0.9rem;
        margin-left: 0.5rem;
      `

export const NewInput = styled.input`
        margin-left: 1rem;
        margin-bottom: 1rem;
      `