import React from 'react';
import { ArrowLeft} from 'lucide-react';
import { useNavigate, useParams} from "react-router-dom";

const InsightsList = ({ insights }) => {
    const navigate = useNavigate();
    const { id } = useParams(); 
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button className="flex items-center text-black-600 " onClick={() => navigate(`/projects/${id}`)}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Insights({insights.length})</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400 border-b">
              <th className="py-4 px-6">#</th>
              <th className="py-4 px-6">Insights Name</th>
              <th className="py-4 px-6">Format</th>
              <th className="py-4 px-6">Source</th>
              <th className="py-4 px-6">Date & Time</th>
              <th className="py-4 px-6">MORE</th>
            </tr>
          </thead>
          <tbody>
            {insights.map((insight) => (
              <tr key={insight.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-black-600">{insight.id}</td>
                <td className="py-4 px-6 text-sm text-black-600">{insight.name}</td>
                <td className="py-4 px-6 text-sm text-black-600">{insight.format}</td>
                <td className="py-4 px-6 text-sm text-black-600">{insight.source}</td>
                <td className="py-4 px-6 text-sm text-black-600">{insight.datetime}</td>
                <td className="py-4 px-6">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsightsList;