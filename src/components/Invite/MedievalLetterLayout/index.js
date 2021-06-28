import { 
  MedievalLetter,
  TopLetterDetail,
  BottomLetterDetail,
  LetterContent,
} from './styles'

export default function MedievalLetterLayout({ children }) {
  return (
    <MedievalLetter>
      <TopLetterDetail />
      <LetterContent>
        {children}
      </LetterContent>
      <BottomLetterDetail />
    </MedievalLetter>
  )
}