import styled from 'styled-components'

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
`

export const LetterContent = styled.div`
  width: 80%;
  height: calc(100% - 239px);
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 780px) {
    height: calc(100% - 141px);
  }
`
