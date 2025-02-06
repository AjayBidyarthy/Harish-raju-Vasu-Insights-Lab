import React from 'react';

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
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">#</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={country} className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
