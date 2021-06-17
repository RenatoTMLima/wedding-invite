import { useState, useCallback } from 'react'

import { 
  FirstBackground, 
  MedievalEnvelope,
  EnvelopeText,
  OpenLetterContainer,
  MedievalLetter,
  TopLetterDetail,
  BottomLetterDetail,
  LetterContent,
  MedievalText
} from './styles'

export default function Invite() {
  const [open, setOpen] = useState(false)
  
  const handleOpenEnvelope = useCallback(() => setOpen(true), [open])
  
  return open ? (
    <OpenLetterContainer>
      <MedievalLetter>
        <TopLetterDetail />
        <LetterContent>
          <MedievalText>Amor para mim é ser capaz</MedievalText>
          <MedievalText>de permitir que aquele</MedievalText>
          <MedievalText>que eu amo exista como tal, como ele mesmo.</MedievalText>
          <MedievalText>Isso é o mais pleno do amor.</MedievalText>
          <MedievalText>Dar liberdade dele existir ao meu lado</MedievalText>
          <MedievalText>do jeito que ele é.</MedievalText>
        </LetterContent>
        <BottomLetterDetail />
      </MedievalLetter>
    </OpenLetterContainer>
  ) : (
    <FirstBackground>
      <MedievalEnvelope onClick={handleOpenEnvelope}>
        <div>
          <EnvelopeText>De: <span>Takao & Tainara</span></EnvelopeText>
          <EnvelopeText>Para: <span>Joãozinho e sua família</span></EnvelopeText>
        </div>
      </MedievalEnvelope>
    </FirstBackground>
  )
}