import { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { 
  OpenLetterContainer,
  OpenLetterContent,
  MedievalText,
  Moldura,
  ButtonContainer,
  Button
} from './styles'

import MedievalLetterLayout from '../MedievalLetterLayout'

import arrowIcon from '../../../../public/arrow.png'

import photo01 from '../../../../public/photos/001.png'
import photo03 from '../../../../public/photos/003.png'
import photo04 from '../../../../public/photos/004.png'

export default function OpenLetter() {
  const [indice, setIndice] = useState(0)

  const slideContent = useMemo(() => {
    return [
      <>
        <MedievalText>Amor para mim é ser capaz</MedievalText>
        <MedievalText>de permitir que aquele</MedievalText>
        <MedievalText>que eu amo exista como tal, como ele mesmo.</MedievalText>
        <MedievalText>Isso é o mais pleno do amor.</MedievalText>
        <MedievalText>Dar liberdade dele existir ao meu lado</MedievalText>
        <MedievalText>do jeito que ele é.</MedievalText>
      </>,
      <>
        <Moldura>
          <Image src={photo03} width="198" height="162" />
        </Moldura>
        <MedievalText>Nossa primeira foto juntos...</MedievalText>
      </>,
      <>
        <Moldura>
          <Image src={photo01} width="198" height="162" />
        </Moldura>
        <MedievalText>São Thomé das Letras - MG</MedievalText>
      </>,
      <>
        <Moldura>
          <Image src={photo04} width="198" height="162" />
        </Moldura>
        <MedievalText>No Yellow Submarine</MedievalText>
      </>,
      <>
        <MedievalText>São quase 9 anos colecionando momentos</MedievalText>
        <MedievalText>e fortalecendo o que há de mais precioso:</MedievalText>
        <MedievalText><strong>o Amor...</strong></MedievalText>
        <MedievalText>E para selar mais um grande momento, </MedievalText>
        <MedievalText>convidamos você para a celebração</MedievalText>
        <MedievalText>do nosso casamento:</MedievalText>
      </>,
      <>
        <MedievalText><strong>Data:</strong> 31/07/2021</MedievalText>
        <MedievalText><strong>Hora:</strong> 15:30</MedievalText>
        <MedievalText><strong>Local:</strong> Sítio Salvador</MedievalText>
        <MedievalText><strong>Endereço:</strong> Leonardo Pedro Schmitt, 8023</MedievalText>
        <MedievalText>Gaspar, SC</MedievalText>
      </>,
      <>
        <MedievalText><strong>Cronograma:</strong></MedievalText>
        <MedievalText>15h30 - Recepção dos Convidados</MedievalText>
        <MedievalText>16h00 - Início da cerimônia</MedievalText>
        <MedievalText>17h00 - Coquetel de Celebração</MedievalText>
      </>,
       <>
        <MedievalText><strong>Informações:</strong></MedievalText>
        <MedievalText>Traje: Vá confortável e não esqueça seu casaco.</MedievalText>
        <MedievalText>Leve sua máscara.</MedievalText>
        <MedievalText>Confirmar presença até:</MedievalText>
        <MedievalText>12/07</MedievalText>
        <MedievalText>Esperamos você!</MedievalText>
      </>
    ]
  }, [])

  const indiceMaximo = useMemo(() => slideContent.length - 1, [])

  const handleNext = useCallback(() => {
    if(indice < indiceMaximo)
      setIndice(prev => prev + 1)
  }, [indice])

  const handleBack = useCallback(() => {
    if(indice > 0)
      setIndice(prev => prev - 1)
  }, [indice])

  return (
    <OpenLetterContainer>
      <MedievalLetterLayout>
        <OpenLetterContent>
          {slideContent[indice]}
        </OpenLetterContent>
        <ButtonContainer>
          {indice > 0 && (
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
