import React from 'react';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timestamp = props.timeStamp;

  return (
    <section className="chat-entry">
      <section className="entry-bubble">
        <div className="entry-name">{sender}</div>
        <div className="entry-body">{body}</div>
        <div className="entry-time"><Timestamp time={timestamp} /></div>
      </section>
    </section>
  );
}

export default ChatMessage;
