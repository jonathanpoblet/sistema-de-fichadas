import React, { useState, useEffect } from 'react';
import './table.css';

export default function Table({ columns, data }) {

  const [query, setQuery] = useState('');
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    const queryLowerCase = query.toLowerCase();
    const res = data.filter(item => {
      for (const column of columns) {
        const key = column.key;
        const value = item[key].toString().toLowerCase();
        if (value.includes(queryLowerCase)) {
          return true;
        }
      }
      return false;
    });

    setTempData(res);
  }, [query, columns, data]);

  return (
    <div className='table'>
      <div className='table-header'>
        <div className='table-header-search'>
          <input
            placeholder='Buscar'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tempData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}