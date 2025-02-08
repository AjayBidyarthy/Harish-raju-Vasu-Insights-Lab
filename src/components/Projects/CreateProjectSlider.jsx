import React, { useState } from 'react';
import { X, ChevronDown, Info } from "lucide-react";
import ExploreModal from './ExploreModal';

const CreateProjectSlider = ({ isOpen, onClose, products, selectedProducts, onToggleProduct, openModal }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <div 
      className={`absolute top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
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

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Project Name</label>
            <input 
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Add Subscribed Products</label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <div className="relative flex items-center border rounded-md">
                  <button
                    className="w-full px-3 py-2 flex justify-between items-center bg-white"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="text-gray-500">
                      {selectedProducts.length === 0 
                        ? "Subscribed Products" 
                        : `${selectedProducts.length} selected`}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
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
                            className="mr-2"
                          />
                          <span>{product}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div 
                className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                onClick={openModal}
                >
                <img 
                    src="/assets/albus.png" 
                    alt="Ask Albus" 
                    className="w-full h-full object-contain rounded-full" 
                />
                </div>
            </div>
          
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Project Description</label>
            <textarea 
              placeholder="Description"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows="3"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#054CA0] text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectSlider;