import React, { useEffect, useState } from 'react';
import './table.css';

export default function Table({ columns, data }) {

  const [totalItems, setTotalItems] = useState(data.length);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / rows));
  const [query, setQuery] = useState('');
  const [tempData, setTempData] = useState(data.slice(0, rows));

  const search = (newPage, newRows, newQuery) => {
    const queryLowerCase = newQuery.toLowerCase();
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

    setRows(newRows);
    setQuery(newQuery);
    setTotalItems(res.length);
    setTotalPages(Math.ceil(res.length / newRows));

    // Asegurarse de que la página no exceda el número total de páginas
    const newPageClamped = Math.min(newPage, totalPages - 1);
    setPage(newPageClamped);

    const startIndex = newPageClamped * newRows;
    const endIndex = startIndex + newRows;
    setTempData(res.slice(startIndex, endIndex));
  }

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    search(page, rows, query);
  }, [page, rows, query]);

  return (
    <div className='table'>
      <div className='table-header'>
        <div className='table-header-rows'>
          <p>
            Mostrar
          </p>
          <select onChange={(e) => { search(0, e.target.value, query) }}>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
        <div className='table-header-search'>
          <input placeholder='Buscar' onChange={(e) => search(0, rows, e.target.value)} />
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
        <p>Pagina {page + 1} de {totalPages} (de {totalItems} resultados)</p>
        <div>
          <button onClick={handlePreviousPage}>Anterior</button>
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  )
}