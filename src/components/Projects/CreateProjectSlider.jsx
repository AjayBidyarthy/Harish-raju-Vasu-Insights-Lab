'use client';

import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

const CreateProjectPanel = ({ isOpen, onClose, products, selectedProducts, onToggleProduct, openModal, projectName, setProjectName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const removeProduct = (product) => {
    onToggleProduct(product);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div 
        className="fixed top-0 right-0 left-1/2 h-full w-1/2 max-w-screen-md bg-white shadow-lg z-50 overflow-y-auto"
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Create New Project</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
              <input 
                type="text"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Add Subscribed Products</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <div className="relative flex items-center border rounded-md">
                    <button
                      className="w-full px-3 py-2 flex justify-between items-center bg-white"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="text-gray-500">
                        {selectedProducts.length === 0 
                          ? "Select products" 
                          : `${selectedProducts.length} selected`}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto z-50">
                        {products.map((product) => (
                          <label 
                            key={product}
                            className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedProducts.includes(product)}
                              onChange={() => onToggleProduct(product)}
                              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="text-sm">{product}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div 
                  className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={openModal}
                >
                  <img 
                    src="/assets/albus.png" 
                    alt="Ask Albus" 
                    className="w-full h-full object-contain rounded-full" 
                  />
                </div>
              </div>

              {selectedProducts.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedProducts.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                    >
                      <span>{product}</span>
                      <button
                        onClick={() => removeProduct(product)}
                        className="hover:text-blue-900 ml-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
              <textarea 
                placeholder="Enter project description"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-[#054CA0] text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectPanel;
