'use client';

import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import "./CreateProjectSlider.scss"

const CreateProjectPanel = ({ isOpen, onClose, products, selectedProducts, onToggleProduct, openModal, projectName, setProjectName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const removeProduct = (product) => {
    onToggleProduct(product);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="create-project-panel__overlay" onClick={onClose} />
      <div className="create-project-panel__container">
        <div className="create-project-panel__content">
          <div className="create-project-panel__header">
            <h2>Create New Project</h2>
            <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="create-project-panel__form">
            <div className="create-project-panel__field">
              <label>Project Name</label>
              <input 
                type="text"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>

            <div className="create-project-panel__field">
              <div className="create-project-panel__label-row">
                <label>Add Subscribed Products</label>
              </div>
              <div className="create-project-panel__field-row">
                <div className="create-project-panel__product-selector">
                  <button
                    className="create-project-panel__product-selector-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>
                      {selectedProducts.length === 0 
                        ? "Select products" 
                        : `${selectedProducts.length} selected`}
                    </span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="create-project-panel__product-selector-dropdown">
                      {products.map((product) => (
                        <label key={product}>
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product)}
                            onChange={() => onToggleProduct(product)}
                          />
                          <span>{product}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <div className="create-project-panel__albus-button" onClick={openModal}>
                  <img 
                    src="/assets/albus.png" 
                    alt="Ask Albus"
                  />
                </div>
              </div>

              {selectedProducts.length > 0 && (
                <div className="create-project-panel__selected-products">
                  {selectedProducts.map((product) => (
                    <div key={product} className="product-tag">
                      <span>{product}</span>
                      <button onClick={() => removeProduct(product)}>
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="create-project-panel__field">
              <label>Project Description</label>
              <textarea 
                placeholder="Enter project description"
                rows="4"
              />
            </div>
          </div>

          <div className="create-project-panel__actions">
            <button
              onClick={onClose}
              className="cancel"
            >
              Cancel
            </button>
            <button className="create">
              Create Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectPanel;