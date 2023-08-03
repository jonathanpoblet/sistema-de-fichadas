import React, { useState } from 'react';
import './table.css';

export default function Table({ columns, data }) {

  const [rows, setRows] = useState(10);
  const [query, setQuery] = useState('');
  const [tempData,setTempData] = useState(data.slice(0, rows));

  const search = (quantity,query) => {
    setRows(quantity);
    setQuery(query);

    if(!query) return setTempData(data.slice(0, quantity));

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

    setTempData(res.slice(0, quantity));
  }

  return (
    <div className='table'>
      <div className='table-header'>
        <div className='table-header-rows'>
          <p>
            Mostrar
          </p>
          <select onChange={(e) => {search(e.target.value,query)}}>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
        <div className='table-header-search'>
          <input placeholder='Buscar' onChange={(e) => search(rows,e.target.value)} />
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

      <div className='table-footer'>
        <p>Pagina 1 de 2 (de {data.length} resultados)</p>
        <div>
          <button>Anterior</button>
          <button>Siguiente</button>
        </div>
      </div>
    </div>
  )
}
