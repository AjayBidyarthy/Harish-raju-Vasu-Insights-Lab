import { useState } from "react";
import { ArrowLeft, FileText, Code, Table, MessageSquare, RefreshCw } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import TableView from "../InsightsViewType/TableView";
import CodeView from "../InsightsViewType/CodeView";
import TextView from "../InsightsViewType/TextView";
import PromptView from "../InsightsViewType/PromptView";

const InsightsInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [viewMode, setViewMode] = useState("text");
  const [timeframe, setTimeframe] = useState("Timeframe");
  const [page, setPage] = useState("Page");

  const getButtonStyles = (mode) => {
    if (viewMode === mode) {
      return "p-2 bg-gray-100";
    }
    return "p-2 hover:bg-gray-50 text-gray-400 transition-colors";
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button
            className="flex items-center text-gray-600 hover:text-gray-800"
            onClick={() => navigate(`/projects/${id}`)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Insight_1</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select
              className="px-3 py-1.5 border rounded-md text-sm bg-white"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option>Timeframe</option>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>

            <select
              className="px-3 py-1.5 border rounded-md text-sm bg-white"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            >
              <option>Page</option>
              <option>Page 1</option>
              <option>Page 2</option>
              <option>Page 3</option>
            </select>

            <button className="flex items-center gap-1 px-3 py-1.5 border rounded-md text-sm hover:bg-gray-50">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="text-sm">
          <span className="font-medium">Prompt: </span>
          give me details of N_name type
        </div>
        <div className="text-sm">
          <span className="font-medium">Source: </span>
          Albus AI
        </div>
        <div className="text-sm">
          <span className="font-medium">Date: </span>
          30/1/25 - 15:15
        </div>
        <br/>
        <div className="flex border rounded-md">
          <button
            className={getButtonStyles("text")}
            onClick={() => setViewMode("text")}
          >
            <FileText className="w-5 h-5" />
          </button>
          <button
            className={getButtonStyles("code")}
            onClick={() => setViewMode("code")}
          >
            <Code className="w-5 h-5" />
          </button>
          <button
            className={getButtonStyles("table")}
            onClick={() => setViewMode("table")}
          >
            <Table className="w-5 h-5" />
          </button>
          <button
            className={getButtonStyles("prompt")}
            onClick={() => setViewMode("prompt")}
          >
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        {viewMode === "text" && <div><TextView/></div>}
        {viewMode === "code" && <div><CodeView/></div>}
        {viewMode === "table" && <div><TableView/></div>}
        {viewMode === "prompt" && <div><PromptView/></div>}
      </div>
    </div>
  );
};

export default InsightsInfo;