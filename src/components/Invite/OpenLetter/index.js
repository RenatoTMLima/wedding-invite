import { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { 
  OpenLetterContainer,
  OpenLetterContent,
  MedievalText,
  ButtonContainer,
  Button
} from './styles'

import MedievalLetterLayout from '../MedievalLetterLayout'

import arrowIcon from '../../../../public/arrow.png'

export default function OpenLetter() {
  const [indice, setIndice] = useState(1)

  const indiceMaximo = useMemo(() => 3, [])

  const handleNext = useCallback(() => {
    if(indice < indiceMaximo)
      setIndice(prev => prev + 1)
  }, [indice])

  const handleBack = useCallback(() => {
    if(indice > 1)
      setIndice(prev => prev - 1)
  }, [indice])

  return (
    <OpenLetterContainer>
      <MedievalLetterLayout>
        {indice === 1 && (
          <OpenLetterContent>
            <MedievalText>Amor para mim é ser capaz</MedievalText>
            <MedievalText>de permitir que aquele</MedievalText>
            <MedievalText>que eu amo exista como tal, como ele mesmo.</MedievalText>
            <MedievalText>Isso é o mais pleno do amor.</MedievalText>
            <MedievalText>Dar liberdade dele existir ao meu lado</MedievalText>
            <MedievalText>do jeito que ele é.</MedievalText>
          </OpenLetterContent>
        )}
        {indice === 2 && (
          <OpenLetterContent>
            <MedievalText>Fotinhas legais S2</MedievalText>
          </OpenLetterContent>
        )}
        {indice === 3 && (
          <OpenLetterContent>
            <MedievalText><strong>Data:</strong> 31/07/2021</MedievalText>
            <MedievalText><strong>Hora:</strong> 16:00</MedievalText>
            <MedievalText><strong>Local:</strong> Sítio Salvador</MedievalText>
            <MedievalText><strong>Endereço:</strong> Leonardo Pedro Schmitt, 8023</MedievalText>
            <MedievalText>Gaspar, SC</MedievalText>
          </OpenLetterContent>
        )}
        <ButtonContainer>
          {indice > 1 && (
            <Button left onClick={handleBack}>
              <Image src={arrowIcon} width="80" height="50" />
            </Button>
          )}
          {indice < indiceMaximo && (
            <Button right onClick={handleNext}>
              <Image src={arrowIcon} width="80" height="50" />
            </Button>
          )}
        </ButtonContainer>
      </MedievalLetterLayout>
    </OpenLetterContainer>
  )
}
