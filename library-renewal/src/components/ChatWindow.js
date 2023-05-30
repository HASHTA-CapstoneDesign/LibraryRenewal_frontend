import React, { useState } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      const url = `http://34.64.215.230:8080/api/chatbot?message=${encodeURIComponent(input)}`;
      try {
        setIsLoading(true); // 로딩 표시 시작
        const response = await fetch(url);
        const data = await response.json();
        setMessages([
          ...messages,
          { text: input, sender: 'user' },
          { text: data.result, sender: 'bot' }
        ]);
        setInput('');
      } catch (error) {
        console.error(error);
        // 에러 처리
      } finally {
        setIsLoading(false); // 로딩 표시 종료
      }
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-container">
        <div className="message-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-bubble ${message.sender === 'user' ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            className="input-field"
            value={input}
            onChange={handleChange}
          />
          <button type="submit" className="send-button">
            {isLoading ? '로딩 중...' : '전송'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
