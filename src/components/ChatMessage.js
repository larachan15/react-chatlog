import React from 'react';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timestamp = props.timeStamp;

  return (
    <section>
      <div className="chat-sender">{sender}</div>
      <div className="chat-body">{body}</div>
      <div className="chat-time"><Timestamp time={timestamp} /></div>
    </section>
  );
}

export default ChatMessage;
