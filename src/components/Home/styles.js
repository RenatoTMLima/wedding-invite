import styled from 'styled-components'

export const FirstBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/first-background.jpg") no-repeat center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MedievalEnvelope = styled.div`
  width: 774px;
  height: 554px;
  background: url("/medieval-envelope.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  cursor: pointer;

  & div {
    width: fit-content;
    height: 50%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 780px) {
    width: 361px;
    height: 258px;
  }
  
  @media screen and (max-width: 500px) {
    width: 361px;
    height: 258px;
  }
`

export const EnvelopeText = styled.strong`
  margin: 10px 0;
  font-family: 'Italianno', sans-serif;
  font-size: 60px;

  & span {
    font-weight: normal;
  }

  @media screen and (max-width: 780px) {
    margin: 2px 0;
    font-size: 36px;
  }

  @media screen and (max-width: 500px) {
    margin: 2px 0;
    font-size: 36px;
  }
`
export const OpenLetterContainer = styled.div`
  height: 100vh;
  padding: 0 20px;
  background: url("/letter-bg.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MedievalLetter = styled.div`
  width: 100%;
  max-width: 980px;
  height: 95vh;
  background-color: #E7D6AA;
  border-radius: 4px;
  border: 1px solid #B8945C;
  box-shadow: -6px 6px 5px 2px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TopLetterDetail = styled.div`
  width: 515px;
  height: 121px;
  background: url("/top-letter-detail.png") no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 780px) {
    width: 309px;
    height: 72px;
  }

  @media screen and (max-width: 500px) {
    width: 309px;
    height: 72px;
  }
`

export const BottomLetterDetail = styled.div`
  width: 516px;
  height: 118px;
  background: url("/bottom-letter-detail.png") no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 780px) {
    width: 309px;
    height: 70px;
  }

  @media screen and (max-width: 500px) {
    width: 309px;
    height: 70px;
  }
`

export const LetterContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MedievalText = styled.span`
  font-family: 'Italianno', sans-serif;
  font-size: 56px;
  text-align: center;

  @media screen and (max-width: 780px) {
    font-size: 44px;
  }

  @media screen and (max-width: 500px) {
    font-size: 44px;
  }
`