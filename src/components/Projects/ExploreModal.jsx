import React, { useState } from 'react';
import { X, FileText, Code, Table, MessageSquare, Share2, Maximize2 } from "lucide-react";

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
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white rounded-lg shadow-xl">
        <div className="h-[80vh] flex flex-col">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold">Recommend Relevant Products</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
          <p className="">What type of analysis you want to perform in the project "{projectName || 'Project Title'}"?</p><br/>
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-2">
                  <div className={`w-8 h-8 ${message.type === 'user' ? 'bg-orange-500' : 'bg-blue-500'} rounded-lg flex items-center justify-center text-white`}>
                    {message.type === 'user' ? 'bb' : 'AI'}
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-gray-500 mb-1">{message.timestamp}</div>
                    {message.type === 'user' ? (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap font-mono text-sm">{message.content}</pre>
                      </div>
                    ) : (
                      <>
                        <div className="bg-gray-50 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap font-mono text-sm">{message.content}</pre>
                      </div>
                        <div className="flex gap-3 mb-2 rounded-md p-2 bg-white w-fit">
                            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                              Add Products
                            </button>
                            <button className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium" onClick={handleRepeat}>
                              Repeat
                            </button>
                          </div>
                      </>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          {showInput && (
            <div className="p-6 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-grow border rounded-lg p-3"
                  placeholder="Type your prompt here"
                />
                <button 
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
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