import { useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { X } from 'lucide-react';
import MainSection from "./MainSection";
import CreateInsightModal from "./CreateInsightModal";
import './SideNav.scss';

const SideNav = ({ insights }) => {
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isWorkbookOpen, setIsWorkbookOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateInsight, setIsCreateInsight] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = [
    {
      id: 1,
      projectInfo: {
        name: "Project 1",
        insights: 10,
        insights_workbook: [
          { id: 1, name: "InsightWorkbook_1" },
          { id: 2, name: "InsightWorkbook_2" },
          { id: 3, name: "InsightWorkbook_3" },
          { id: 4, name: "InsightWorkbook_4" },
          { id: 5, name: "InsightWorkbook_5" }
        ],
        added_products: 5
      },
      insightsList: [
        { id: 1, name: "Insights_1", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 2, name: "Insights_2", format: "Code, Text", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 2,
      projectInfo: {
        name: "Project 2",
        insights: 8,
        insights_workbook: [
          { id: 6, name: "InsightWorkbook_6" },
          { id: 7, name: "InsightWorkbook_7" },
          { id: 8, name: "InsightWorkbook_8" },
          { id: 9, name: "InsightWorkbook_9" },
          { id: 10, name: "InsightWorkbook_10" }
        ],
        added_products: 4
      },
      insightsList: [
        { id: 3, name: "Insights_3", format: "Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" },
        { id: 4, name: "Insights_4", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 3,
      projectInfo: {
        name: "Project 3",
        insights: 12,
        insights_workbook: [
          { id: 11, name: "InsightWorkbook_11" },
          { id: 12, name: "InsightWorkbook_12" },
          { id: 13, name: "InsightWorkbook_13" },
          { id: 14, name: "InsightWorkbook_14" },
          { id: 15, name: "InsightWorkbook_15" }
        ],
        added_products: 6
      },
      insightsList: [
        { id: 5, name: "Insights_5", format: "Text", source: "Python Code", datetime: "30/1/25 - 15:15" },
        { id: 6, name: "Insights_6", format: "Code, Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 4,
      projectInfo: {
        name: "Project 4",
        insights: 15,
        insights_workbook: [
          { id: 16, name: "InsightWorkbook_16" },
          { id: 17, name: "InsightWorkbook_17" },
          { id: 18, name: "InsightWorkbook_18" },
          { id: 19, name: "InsightWorkbook_19" },
          { id: 20, name: "InsightWorkbook_20" }
        ],
        added_products: 8
      },
      insightsList: [
        { id: 7, name: "Insights_7", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 8, name: "Insights_8", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 5,
      projectInfo: {
        name: "Project 5",
        insights: 6,
        insights_workbook: [
          { id: 21, name: "InsightWorkbook_21" },
          { id: 22, name: "InsightWorkbook_22" },
          { id: 23, name: "InsightWorkbook_23" },
          { id: 24, name: "InsightWorkbook_24" },
          { id: 25, name: "InsightWorkbook_25" }
        ],
        added_products: 3
      },
      insightsList: [
        { id: 9, name: "Insights_9", format: "Text", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 10, name: "Insights_10", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    }
  ];

  const handleInsightsClick = () => {
    setIsInsightsOpen(!isInsightsOpen);
  };

  const handleInsightsDoubleClick = () => {
    if (id) {
      navigate(`/projects/${id}/insights`);
    }
  };

  const ToggleIcon = ({ isOpen }) => (
    <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>
      {isOpen ? "−" : "+"}
    </span>
  );

  return (
    <nav className="side-nav">
      <div className="nav-container">
        <div className="header">
          <svg className="folder-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <p>Supplychain Analysis</p>
        </div>

        <div className="nav-sections">
          <div className="vertical-line"></div>

          <div className="section">
            <div className="horizontal-line"></div>
            <button
              onClick={handleInsightsClick}
              onDoubleClick={handleInsightsDoubleClick}
              className="section-button"
            >
              <ToggleIcon isOpen={isInsightsOpen} />
              <span>Insights (5)</span>
            </button>
            
            {isInsightsOpen && (
              <div className="section-content">
                <button 
                  className="create-button"
                  onClick={() => setIsCreateInsight(true)}
                >
                  <svg className="plus-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create New Insight
                </button>

                {isCreateInsight && (
                  <div className="modal-overlay">
                    <div className="modal-container">
                      <div className="modal-header">
                        <h2>Create Insight</h2>
                        <button 
                          onClick={() => setIsCreateInsight(false)}
                          className="close-button"
                        >
                          <X />
                        </button>
                      </div>
                      <CreateInsightModal/>
                    </div>
                  </div>
                )}

                <div className="content-line"></div>
                {projectData.flatMap(project => project.insightsList).map((item) => (
                  <div key={item.id} className="list-item">
                    <div className="item-line"></div>
                    <Link
                      to={`/projects/${id}/insights/${item.id}`}
                      className={location.pathname === `/project/${item.id}` ? 'active' : ''}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Insights Workbook Section */}
          <div className="section">
            <button onClick={() => setIsWorkbookOpen(!isWorkbookOpen)} className="section-button">
              <ToggleIcon isOpen={isWorkbookOpen} />
              <span>Insights Workbook (20)</span>
            </button>
            
            {isWorkbookOpen && (
              <div className="section-content">
                <button 
                  className="create-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg className="plus-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create New Workbook
                </button>

                {isModalOpen && (
                  <div className="modal-overlay">
                    <div className="modal-container workbook">
                      <div className="modal-header">
                        <h2>Create Insight Workbook</h2>
                        <button 
                          onClick={() => setIsModalOpen(false)}
                          className="close-button"
                        >
                          <X />
                        </button>
                      </div>
                      
                      <div className="modal-content">
                        <div className="form-group">
                          <label>Title Name</label>
                          <input type="text" placeholder="Title Name" />
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <input type="text" placeholder="Description" />
                        </div>
                        <div className="button-group">
                          <button onClick={() => setIsModalOpen(false)} className="cancel-button">
                            Cancel
                          </button>
                          <button className="create-action-button">
                            Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {projectData.flatMap(project => project.projectInfo?.insights_workbook ?? []).map((item) => (
                  <div key={item.id} className="list-item">
                    <Link to={`/projects/${id}/workbooks/${item.id}`}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Section */}
          <div className="section">
            <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="section-button">
              <ToggleIcon isOpen={isProductsOpen} />
              <span>Products (10)</span>
            </button>
            
            {isProductsOpen && (
              <div className="section-content">
                {projectData.flatMap(project => project.projectInfo).map((item) => (
                  <div key={item.id} className="list-item">
                    <Link to={`/products/${item.id}`}>
                      Product ({item.added_products})
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;