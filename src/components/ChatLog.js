import React from 'react';
import ChatMessage from './ChatMessage';

const ChatLog = (props) => {
  const parsedData = props.messages.map((message, i) => {
    return <ChatMessage key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp} />
  });
  return (
    <section className="timeline">{parsedData}</section>
  );
};

export default ChatLog;
