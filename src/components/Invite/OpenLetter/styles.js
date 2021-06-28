import styled, { css } from 'styled-components'

export const OpenLetterContainer = styled.div`
  height: 100vh;
  padding: 0 20px;
  background: url("/letter-bg.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OpenLetterContent = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MedievalText = styled.span`
  font-family: 'Italianno', sans-serif;
  font-size: 56px;
  text-align: center;

  @media screen and (max-width: 780px) {
    font-size: 44px;
  }
`

export const Moldura = styled.div`
  width: 342px;
  height: 324px;
  background: url("/foto-moldura.png") no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`

export const Button = styled.div`
  background-color: #ceb288;
  border-radius: 50%;
  cursor: pointer;
  width: 90px;
  height: 90px;
  box-shadow: -6px 6px 5px 2px rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.right && css`
    transform: rotate(27deg);
    margin-left: auto;
  `}

  ${props => props.left && css`
    transform: rotate(-153deg);
  `}

  @media screen and (max-width: 780px) {
    width: 70px;
    height: 70px;

    & img {
      width: 60px;
      height: 40px;
    }
  }
`