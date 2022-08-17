import React from 'react'
import moment from 'moment'

export default function MovePreview({m}) {
    if(!m) return <div>Loading...</div>
  return (
    <div className='move-preview flex column'>
        <span><span className='txt'>At:</span>{moment(m.at).format('DD/MM/YY, h:mm:ss A')}</span>
        <span><span className='txt'>Amount:</span>{m.amount}</span>
    </div>
  )
}
