import { useState } from "react";
import { ArrowLeft, FileText, Code, Table, MessageSquare, RefreshCw } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import TableView from "../InsightsViewType/TableView";
import CodeView from "../InsightsViewType/CodeView";
import TextView from "../InsightsViewType/TextView";
import PromptView from "../InsightsViewType/PromptView";
import './InsightsInfo.scss';

const InsightsInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [viewMode, setViewMode] = useState("text");
  const [timeframe, setTimeframe] = useState("Timeframe");
  const [tag, setTag] = useState("Tag");

  const getButtonStyles = (mode) => {
    return `view-mode-button ${viewMode === mode ? 'active' : ''}`;
  };

  return (
    <div className="insights-info">
      <div className="header">
        <div className="back-button">
          <button onClick={() => navigate(`/projects/${id}`)}>
            <ArrowLeft />
            <span>Insight_1</span>
          </button>
        </div>

        <div className="controls">
          <div className="control-group">
            <select
              className="select-control"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option>Timeframe</option>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>

            <select
              className="select-control"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option>Tags</option>
              <option>Tag 1</option>
              <option>Tag 2</option>
              <option>Tag 3</option>
            </select>

            <button className="refresh-button">
              <RefreshCw />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-item">
          <span className="label">Prompt: </span>
          give me details of N_name type
        </div>
        <div className="info-item">
          <span className="label">Source: </span>
          Albus AI
        </div>
        <div className="info-item">
          <span className="label">Date: </span>
          30/1/25 - 15:15
        </div>
        
        <div className="view-mode-buttons">
          <button
            className={getButtonStyles("text")}
            onClick={() => setViewMode("text")}
          >
            <FileText />
          </button>
          <button
            className={getButtonStyles("code")}
            onClick={() => setViewMode("code")}
          >
            <Code />
          </button>
          <button
            className={getButtonStyles("table")}
            onClick={() => setViewMode("table")}
          >
            <Table />
          </button>
          <button
            className={getButtonStyles("prompt")}
            onClick={() => setViewMode("prompt")}
          >
            <MessageSquare />
          </button>
        </div>
      </div>

      <div className="view-content">
        {viewMode === "text" && <div><TextView/></div>}
        {viewMode === "code" && <div><CodeView/></div>}
        {viewMode === "table" && <div><TableView/></div>}
        {viewMode === "prompt" && <div><PromptView/></div>}
      </div>
    </div>
  );
};

export default InsightsInfo;