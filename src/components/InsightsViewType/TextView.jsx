import React from 'react';
import './TextView.scss';

const TextView = () => {
  const data = [
    { id: 0, name: 'PERU', count: 11950 },
    { id: 1, name: 'CHINA', count: 12048 },
    { id: 2, name: 'RUSSIA', count: 12156 },
    { id: 3, name: 'MOZAMBIQUE', count: 11948 },
    { id: 4, name: 'AMERICA', count: 11990 },
    { id: 5, name: 'AFRICA', count: 12040 },
    { id: 6, name: 'UNITED KINGDOM', count: 12022 },
    { id: 7, name: 'JORDAN', count: 12066 },
    { id: 8, name: 'BRAZIL', count: 11998 },
    { id: 9, name: 'INDONESIA', count: 12322 },
    { id: 10, name: 'CANADA', count: 12040 },
    { id: 11, name: 'IRAN', count: 12018 },
    { id: 12, name: 'ALGERIA', count: 11850 },
    { id: 13, name: 'URGENTANIA', count: 11904 },
    { id: 14, name: 'KENYA', count: 11984 },
    { id: 15, name: 'ARGENTINA', count: 11950 }
  ];

  return (
    <div className="text-view-container">
      <h2>Here are the details for the n_name column:</h2>
      <div className="text-view-table">
        <div className="table-header">
          <span className="column-id"></span>
          <span className="column-name">n_name</span>
          <span className="column-count">count</span>
        </div>
        {data.map(item => (
          <div key={item.id} className="table-row">
            <span className="column-id">{item.id}</span>
            <span className="column-name">{item.name}</span>
            <span className="column-count">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextView;
