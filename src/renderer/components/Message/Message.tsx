import React from 'react';
import './Message.css';

export default function BaseMessage(props: any) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;


    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>

        <div className="bubble-container">
          <div className="bubble" >
            { data.content }
          </div>
        </div>
      </div>
    );
}