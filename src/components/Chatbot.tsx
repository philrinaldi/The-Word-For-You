import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';
import { Configuration, OpenAIApi } from "openai";

const { publicRuntimeConfig } = getConfig();
const openaiKey = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY;
    console.log(openaiKey);
    
    const configuration = new Configuration({
        organization: "org-a2UA77iM0165p0q00DkVUVQp",
        apiKey: openaiKey,
    });

    const openai = new OpenAIApi(configuration);

    console.log(openaiKey);


function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const queryAPI = async () => {
    

    console.log('Fethcing API');
    //const response = await openai.listEngines();
    //console.log(response);
  }

  useEffect(() => {
    queryAPI();
  }, [messages]);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleReset() {
    setMessages([]);
    setInputValue('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    const newMessage = {
      author: 'user',
      text: inputValue,
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
    // Call your chatbot API or function here and handle the response
    console.log(openaiKey);
  }

  return (
    <div className="max-w-lg mx-auto mt-8 px-4">
      <h2 className="text-lg font-bold mb-4">Chatbot</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className={`font-bold ${message.author === 'bot' ? 'text-red-500' : ''}`}>{message.author}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md py-2 px-4 mr-4"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={handleReset}
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Reset Chat
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
