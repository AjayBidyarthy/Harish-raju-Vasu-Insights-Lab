import React, { useState } from 'react';
import { X, FileText, Code, Table, MessageSquare, Share2, Maximize2 } from "lucide-react";
import "./ExploreModal.scss"

const ExploreModal = ({ isOpen, onClose, projectName }) => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [viewMode, setViewMode] = useState("text");
  const [showInput, setShowInput] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    
    const timestamp = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    const aiResponse = `For ${prompt}, following data products seem to be relevant for your project "${projectName || 'Project Title'}": Product 1, Product 2, etc...`;
    
    setMessages([
      ...messages, 
      {
        type: 'user',
        content: prompt,
        timestamp
      },
      {
        type: 'ai',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      }
    ]);
    
    setPrompt("");
    setShowInput(false);
  };

  const handleRepeat = () => {
    setPrompt("");
    setMessages([]);
    setShowInput(true);
  };

  return (
    <div className="explore-modal">
      <div className="explore-modal__overlay" onClick={onClose} />
      <div className="explore-modal__container">
        <div className="explore-modal__content">
          <div className="explore-modal__header">
            <h2>Recommend Relevant Products</h2>
            <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="explore-modal__body">
            <p>What type of analysis you want to perform in the project "{projectName || 'Project Title'}"?</p>
            {messages.map((message, index) => (
              <div key={index} className="explore-modal__message">
                <div className="explore-modal__message-container">
                  <div className={`explore-modal__message-avatar explore-modal__message-avatar--${message.type}`}>
                    {message.type === 'user' ? 'bb' : 'AI'}
                  </div>
                  <div className="explore-modal__message-content">
                    <div className="explore-modal__message-timestamp">{message.timestamp}</div>
                    <div className="explore-modal__message-text">
                      <pre>{message.content}</pre>
                    </div>
                    {message.type === 'ai' && (
                      <div className="explore-modal__message-actions">
                        <button className="btn btn--primary">Add Products</button>
                        <button className="btn btn--secondary" onClick={handleRepeat}>Repeat</button>
                      </div>
                    )}
                  </div>
                  <div className="explore-modal__message-side-actions">
                    <button>
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button>
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showInput && (
            <div className="explore-modal__input">
              <div className="explore-modal__input-container">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="explore-modal__input-field"
                  placeholder="Type your prompt here"
                />
                <button onClick={handleSubmit} className="btn btn--primary">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;