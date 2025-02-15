import React from 'react';
import './TableView.scss';

const TableView = () => {
  const countries = [
    'VIETNAM',
    'URGANTANIA',
    'UNITED STATES',
    'UNITED KINGDOM',
    'SAUDI ARABIA',
    'RUSSIA',
    'ROMANIA',
    'PERU',
    'MOZAMBIQUE',
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={country}>
              <td>{index + 1}</td>
              <td>{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
