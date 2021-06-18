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
`