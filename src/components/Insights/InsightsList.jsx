import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from "react-router-dom";
import "./InsightsList.scss";


const InsightsList = ({ insights }) => {
    const navigate = useNavigate();
    const { id } = useParams(); 

    return (
        <div className="insights-list">
            <div className="header">
                <button className="back-button" onClick={() => navigate(`/projects/${id}`)}>
                    <ArrowLeft className="icon" />
                    <span>Insights ({insights.length})</span>
                </button>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Insights Name</th>
                            <th>Format</th>
                            <th>Source</th>
                            <th>Date & Time</th>
                            <th>MORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insights.map((insight) => (
                            <tr key={insight.id}>
                                <td>{insight.id}</td>
                                <td>{insight.name}</td>
                                <td>{insight.format}</td>
                                <td>{insight.source}</td>
                                <td>{insight.datetime}</td>
                                <td>
                                    <button
                                        className="view-button"
                                        onClick={() => navigate(`/projects/${id}/insights/${insight.id}`)}
                                    >
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
