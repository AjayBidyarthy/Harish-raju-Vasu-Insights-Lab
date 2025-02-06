import { useState } from "react";
import { Share2, Maximize2, X, FileText, Code, Table, MessageSquare, RefreshCw } from "lucide-react";
import TextView from "../InsightsViewType/TextView";
import CodeView from "../InsightsViewType/CodeView";
import PromptView from "../InsightsViewType/PromptView";
import TableView from "../InsightsViewType/TableView";

const AlbusInterface = () => {
  const [showMetadata, setShowMetadata] = useState(true);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("text");
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [timeframe, setTimeframe] = useState("Timeframe");
  const [page, setPage] = useState("Page");

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

  const getButtonStyles = (mode) => {
    if (viewMode === mode) {
      return "p-2 bg-gray-100 rounded-md";
    }
    return "p-2 hover:bg-gray-50 text-gray-400 transition-colors rounded-md";
  };

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
          <div className="bg-gray-50 p-4 rounded-lg">
          <TextView/> 
          </div>
        );
      case "code":
        return (
          <div className="bg-gray-50 p-4 rounded-lg">
           <CodeView/>
          </div>
        );
      case "table":
        return (
          <div className="bg-gray-50 p-4 rounded-lg">
           <TableView/>
          </div>
        );
      case "prompt":
        return (
          <div className="bg-gray-50 p-4 rounded-lg">
           <PromptView/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-poppins w-full p-6 bg-white flex flex-col">
      {/* Top navigation */}
      <div className="relative flex space-x-6 border-b">
        <button
          className={`relative pb-2 text-sm font-medium ${
            activeTab === "all" ? "text-[#1a73e8]" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("all")}
        >
          Ask Albus
          {activeTab === "all" && (
            <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#1a73e8]" />
          )}
        </button>
      </div>

      {/* Info header */}
      <div className="flex items-center justify-between mb-8 mt-4">
        <div className="flex items-center">
          <div>
            <div className="text-sm text-gray-500">Data Product</div>
            <div>Customerinsights</div>
          </div>
          
          <div className="h-12 w-px bg-gray-200 mx-6" />
          
          <div>
            <div className="text-sm text-gray-500">Last Refresh Date & Time</div>
            <div>2025-01-29 05:18:46</div>
          </div>
          
          <div className="h-12 w-px bg-gray-200 mx-6" />
          
          <div>
            <div className="text-sm text-gray-500">No. of Column & Records</div>
            <div>05 Columns, 359862 Records</div>
          </div>
          
          <div className="h-12 w-px bg-gray-200 mx-6" />
          
          <div>
            <div className="text-sm text-gray-500">Data Sensitivity</div>
            <div>Public</div>
          </div>
          
          <div className="h-12 w-px bg-gray-200 mx-6" />
          
          <div>
            <div className="text-sm text-gray-500">PII</div>
            <div>No</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="w-14 h-14 flex items-center justify-center p-4">
          <img src="/assets/albus-add.png" alt="Ask Albus" className="w-full h-full object-contain" />
        </button>
        <button className="w-14 h-14 rounded-lg flex items-center justify-center p-4">
          <img src="/assets/albus-2.png" alt="Ask Albus" className="w-full h-full object-contain " />
        </button>
        <button className="w-14 h-14  flex items-center justify-center p-4 rounded-lg">
        <img
            src="/assets/albus-resize.png"
            alt="Ask Albus"
            className="w-full h-full object-contain"
        />
        </button>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="mb-8 flex flex-col">
          {isFirstSubmit && (
            <>
              <h2 className="text-xl font-semibold mb-1">Explore & Discover</h2>
              <p className="text-sm text-gray-500 mb-4">
                Your data product with our AI Assistance
              </p>
            </>
          )}
          
          <div className="flex-grow mb-4">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-2">
                  <div className={`w-8 h-8 ${message.type === 'user' ? 'bg-orange-500' : 'bg-white-500'} rounded-lg flex items-center justify-center text-white`}>
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
                        <div className="flex gap-1 mb-2 border rounded-md p-1 bg-white w-fit">
                          <button
                            className={getButtonStyles("text")}
                            onClick={() => setViewMode("text")}
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button
                            className={getButtonStyles("code")}
                            onClick={() => setViewMode("code")}
                          >
                            <Code className="w-4 h-4" />
                          </button>
                          <button
                            className={getButtonStyles("table")}
                            onClick={() => setViewMode("table")}
                          >
                            <Table className="w-4 h-4" />
                          </button>
                          <button
                            className={getButtonStyles("prompt")}
                            onClick={() => setViewMode("prompt")}
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                        {renderViewContent(message.content)}
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
          
          {isFirstSubmit ? (
            <div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full min-h-36 border rounded-lg p-4"
                placeholder="Type your prompt here"
              />
              <div className="flex justify-end mt-4">
                <button 
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-grow border rounded-lg p-3"
                placeholder="Type your follow up prompt here"
              />
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          )}
        </div>

        {showMetadata && (
          <div className="flex-grow overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium">Metadata</div>
              <button onClick={() => setShowMetadata(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3">#</th>
                    <th className="text-left p-3">Field Name</th>
                    <th className="text-left p-3">Business Name</th>
                    <th className="text-left p-3">Business Description</th>
                    <th className="text-left p-3">Data Domain</th>
                    <th className="text-left p-3">PII Type</th>
                    <th className="text-left p-3">Sample Values</th>
                  </tr>
                </thead>
                <tbody>
                  {metadata.map((row) => (
                    <tr key={row.id} className="border-b">
                      <td className="p-3">{row.id}</td>
                      <td className="p-3">{row.fieldName}</td>
                      <td className="p-3">{row.businessName}</td>
                      <td className="p-3">{row.businessDescription}</td>
                      <td className="p-3">{row.dataDomain}</td>
                      <td className="p-3">{row.piiType}</td>
                      <td className="p-3">{row.sampleValues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbusInterface;