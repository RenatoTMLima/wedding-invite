import { useState, useCallback } from 'react'

import { 
  FirstBackground, 
  MedievalEnvelope,
  EnvelopeText
} from './styles'

import OpenLetter from './OpenLetter'

import invitedList from '../../static/invitedList'

export default function Invite({ inviteId }) {
  const [open, setOpen] = useState(false)
  
  const handleOpenEnvelope = useCallback(() => setOpen(true), [open])
  
  return open ? (
    <OpenLetter />
  ) : (
    <FirstBackground>
      <MedievalEnvelope onClick={handleOpenEnvelope}>
        <div>
          <EnvelopeText>De: <span>Takao & Tainara</span></EnvelopeText>
          {inviteId && <EnvelopeText>Para: <span>{invitedList[inviteId]}</span></EnvelopeText>}
        </div>
      </MedievalEnvelope>
    </FirstBackground>
  )
}