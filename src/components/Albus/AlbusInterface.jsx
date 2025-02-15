import { useState } from "react";
import { Share2, Maximize2, Save, X, FileText, Code, Table, MessageSquare, RefreshCw } from "lucide-react";
import TextView from "../InsightsViewType/TextView";
import CodeView from "../InsightsViewType/CodeView";
import PromptView from "../InsightsViewType/PromptView";
import TableView from "../InsightsViewType/TableView";
import "./AlbusInterface.scss"

const AlbusInterface = () => {
  const [showMetadata, setShowMetadata] = useState(true);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("text");
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [timeframe, setTimeframe] = useState("Timeframe");
  const [page, setPage] = useState("Page");
  const [insightName, setInsightName] = useState("");
  const [insightDescription, setInsightDescription] = useState("");

  const metadata = [
    {
      id: 1,
      fieldName: "customer_id",
      businessName: "Customer ID",
      businessDescription: "Unique identifier for customer",
      dataDomain: "Customer",
      piiType: "No",
      sampleValues: "C001, C002"
    },
    {
      id: 2,
      fieldName: "purchase_date",
      businessName: "Purchase Date",
      businessDescription: "Date of purchase",
      dataDomain: "Transaction",
      piiType: "No",
      sampleValues: "2024-01-01, 2024-01-02"
    }
  ];

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    
    const timestamp = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    setMessages([
      ...messages, 
      {
        type: 'user',
        content: prompt,
        timestamp
      },
      {
        type: 'ai',
        content: `Response to: ${prompt}`,
        timestamp: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      }
    ]);
    
    if (isFirstSubmit) {
      setIsFirstSubmit(false);
      setShowMetadata(false);
    }
    
    setPrompt("");
  };

  const renderViewContent = (content) => {
    switch (viewMode) {
      case "text":
        return (
          <div className="view-content view-content--text">
            <TextView /> 
          </div>
        );
      case "code":
        return (
          <div className="view-content view-content--code">
            <CodeView />
          </div>
        );
      case "table":
        return (
          <div className="view-content view-content--table">
            <TableView />
          </div>
        );
      case "prompt":
        return (
          <div className="view-content view-content--prompt">
            <PromptView />
          </div>
        );
      default:
        return null;
    }
  };

  const handleSaveInsight = () => {
    console.log('Saving insight:', { insightName, insightDescription });
    setIsModalOpen(false);
    setInsightName("");
    setInsightDescription("");
  };

  return (
    <div className="container">
    {/* Top navigation */}
    <div className="nav">
      <button
        className={`nav__button ${
          activeTab === "all" ? "nav__button--active" : "nav__button--inactive"
        }`}
        onClick={() => setActiveTab("all")}
      >
        Ask Albus
        {activeTab === "all" && <div className="nav__button-indicator" />}
      </button>
    </div>

    {/* Info header */}
    <div className="info-header">
      <div className="info-header__section">
        <div className="info-header__item">
          <div className="info-header__label">Data Product</div>
          <div className="info-header__value">Customerinsights</div>
        </div>
        
        <div className="info-header__section-divider" />
        
        <div className="info-header__item">
          <div className="info-header__label">Last Refresh Date & Time</div>
          <div className="info-header__value">2025-01-29 05:18:46</div>
        </div>
        
        <div className="info-header__section-divider" />
        
        <div className="info-header__item">
          <div className="info-header__label">No. of Column & Records</div>
          <div className="info-header__value">05 Columns, 359862 Records</div>
        </div>
        
        <div className="info-header__section-divider" />
        
        <div className="info-header__item">
          <div className="info-header__label">Data Sensitivity</div>
          <div className="info-header__value">Public</div>
        </div>
        
        <div className="info-header__section-divider" />
        
        <div className="info-header__item">
          <div className="info-header__label">PII</div>
          <div className="info-header__value">No</div>
        </div>
      </div>

      <div className="info-header__buttons">
        <button className="info-header__button">
          <img src="/assets/albus-add.png" alt="Ask Albus" />
        </button>
        <button className="info-header__button info-header__button--rounded">
          <img src="/assets/albus-2.png" alt="Ask Albus" />
        </button>
        <button className="info-header__button info-header__button--rounded">
          <img src="/assets/albus-resize.png" alt="Ask Albus" />
        </button>
      </div>
    </div>

    <div className="main-content">
      <div className="message-section">
        {isFirstSubmit && (
          <div className="message-section__header">
            <h2 className="message-section__title">Explore & Discover</h2>
            <p className="message-section__subtitle">
              Your data product with our AI Assistance
            </p>
          </div>
        )}
        
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="messages__item">
              <div className="messages__avatar-wrapper">
                <div className={`messages__avatar ${
                  message.type === 'user' ? 'messages__avatar--user' : 'messages__avatar--ai'
                }`}>
                  {message.type === 'user' ? 'bb' : 'AI'}
                </div>
              </div>
              <div className="messages__content">
                <div className="messages__timestamp">{message.timestamp}</div>
                {message.type === 'user' ? (
                  <div className="messages__user-content">
                    <pre>{message.content}</pre>
                  </div>
                ) : (
                  <>
                    <div className="view-controls">
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="view-controls__button"
                      >
                        <Save className="view-controls__icon" />
                      </button>
                      <button
                        className={`view-controls__button ${viewMode === "text" ? "view-controls__button--active" : ""}`}
                        onClick={() => setViewMode("text")}
                      >
                        <FileText className="view-controls__icon" />
                      </button>
                      <button
                        className={`view-controls__button ${viewMode === "code" ? "view-controls__button--active" : ""}`}
                        onClick={() => setViewMode("code")}
                      >
                        <Code className="view-controls__icon" />
                      </button>
                      <button
                        className={`view-controls__button ${viewMode === "table" ? "view-controls__button--active" : ""}`}
                        onClick={() => setViewMode("table")}
                      >
                        <Table className="view-controls__icon" />
                      </button>
                      <button
                        className={`view-controls__button ${viewMode === "prompt" ? "view-controls__button--active" : ""}`}
                        onClick={() => setViewMode("prompt")}
                      >
                        <MessageSquare className="view-controls__icon" />
                      </button>
                    </div>
                    {renderViewContent(message.content)}
                  </>
                )}
              </div>
              <div className="messages__actions">
                <button className="messages__action-button">
                  <Share2 className="messages__action-icon" />
                </button>
                <button className="messages__action-button">
                  <Maximize2 className="messages__action-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {isFirstSubmit ? (
          <div className="input-area input-area--first">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="input-area__textarea"
              placeholder="Type your prompt here"
            />
            <div className="input-area__submit">
              <button 
                onClick={handleSubmit}
                className="input-area__button"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="input-area input-area--follow-up">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="input-area__input"
              placeholder="Type your follow up prompt here"
            />
            <button 
              onClick={handleSubmit}
              className="input-area__button"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {showMetadata && (
        <div className="metadata">
          <div className="metadata__header">
            <div className="metadata__title">Metadata</div>
            <button onClick={() => setShowMetadata(false)} className="metadata__close">
              <X className="metadata__close-icon" />
            </button>
          </div>

          <div className="metadata__table-wrapper">
            <table className="metadata__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Field Name</th>
                  <th>Business Name</th>
                  <th>Business Description</th>
                  <th>Data Domain</th>
                  <th>PII Type</th>
                  <th>Sample Values</th>
                </tr>
              </thead>
              <tbody>
                {metadata.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.fieldName}</td>
                    <td>{row.businessName}</td>
                    <td>{row.businessDescription}</td>
                    <td>{row.dataDomain}</td>
                    <td>{row.piiType}</td>
                    <td>{row.sampleValues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>

    {isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <h2>Save Insight</h2>
            <button onClick={() => setIsModalOpen(false)} className="modal__close">
              <X className="modal__close-icon" />
            </button>
          </div>
          <div className="modal__form">
            <div>
              <label htmlFor="insightName">Insight Name</label>
              <input
                id="insightName"
                type="text"
                value={insightName}
                onChange={(e) => setInsightName(e.target.value)}
                placeholder="Enter insight name"
              />
            </div>
            <div>
              <label htmlFor="insightDescription">Description</label>
              <input
                id="insightDescription"
                type="text"
                value={insightDescription}
                onChange={(e) => setInsightDescription(e.target.value)}
                placeholder="Enter insight description"
              />
            </div>
          </div>
          <div className="modal__actions">
            <button 
              className="cancel"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="save"
              onClick={handleSaveInsight}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default AlbusInterface;