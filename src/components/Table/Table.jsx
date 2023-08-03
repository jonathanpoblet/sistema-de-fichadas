import React, { useEffect, useState } from 'react';
import './table.css';

export default function Table({ columns, data }) {

  const [totalItems, setTotalItems] = useState(data.length);
  const [page,setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / rows));
  const [query, setQuery] = useState('');
  const [tempData,setTempData] = useState(data.slice(0, rows));

  const search = (page,quantity,query) => {
    setRows(quantity);
    setQuery(query);

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
    setTotalItems(res.length)
    setTotalPages(Math.ceil(res.length / quantity))
    if(!query)  return setTempData(data.slice(page, quantity));
    setTempData(res.slice(page, quantity));
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
    if(page != 0) {
      console.log(page + rows)
      console.log(rows + rows)
      search(page, rows, query);
    }
  }, [page, rows, query]);


  return (
    <div className='table'>
      <div className='table-header'>
        <div className='table-header-rows'>
          <p>
            Mostrar
          </p>
          <select onChange={ (e) => {search(page,e.target.value,query)} }>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
        <div className='table-header-search'>
          <input placeholder='Buscar' onChange={ (e) => search(page,rows,e.target.value) } />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={ column.key }>{ column.name }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tempData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={ column.key }>{ row[column.key] }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className='table-footer'>
        <p>Pagina {page + 1} de { totalPages } (de { totalItems } resultados)</p>
        <div>
          <button onClick={handlePreviousPage}>Anterior</button>
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  )
}
