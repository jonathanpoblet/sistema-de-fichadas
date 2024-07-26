import React, { useState, useEffect } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { AiFillEdit } from 'react-icons/ai';
import { EmployeModalEdit } from '../../components/Modals/EmployeModalEdit';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { urlBackend } from '../../services/urlBackend';

import { getCompanies } from '../../services/getCompanies';
import columns from './columns.json';

import './clock.css';

export default function Clock() {
  const [clocks, setClocks] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);

  const [employe, setEmploye] = useState({});

  useEffect(() => {
    async function getClocks() {
      const response = await fetch(`${urlBackend}/api/clocks`);
      const data = await response.json();
      setClocks(data);
    }

    getClocks();
    getCompanies(setCompanies);
  }, []);

  const data = () => {
    const formattedData = clocks.map(clock => ({
      edit: (
        <button
          type='button'
          className='btn-sm btn-primary'
          onClick={() => {
            handleShowModalEdit();
            setEmploye(clock);
          }}
        >
          <AiFillEdit />
        </button>
      ),
      ...clock,
    }));

    return {
      columns,
      rows: formattedData,
    };
  };

  if (companies)
    return (
      <section className='clock fade-in'>
        <EmployeModalEdit
          employe={employe}
          companies={companies}
          show={showModalEdit}
          handleClose={handleCloseModalEdit}
        />
        <PageHeader title='FICHADAS' />
        {clocks.length !== 0 ? (
          <CDBContainer className='p-0 bg-general w-100 m-0'>
            <CDBCard className='border-0 rounded'>
              <CDBCardBody className='p-4 w-100'>
                <CDBDataTable
                  noBottomColumns
                  searchLabel='Buscar'
                  paginationLabel={['Anterior', 'Siguiente']}
                  noRecordsFoundLabel='No se han encontrado datos'
                  infoLabel={['Mostrando', 'de', 'de (', 'datos )']}
                  entriesLabel='Mostrar de a'
                  striped
                  responsive
                  hover
                  entriesOptions={[10, 50, 100]}
                  entries={10}
                  pagesAmount={4}
                  data={data()}
                  className='w-100'
                />
              </CDBCardBody>
            </CDBCard>
          </CDBContainer>
        ) : (
          <CDBContainer className='p-0 bg-general w-100 m-0'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src='./assets/loader.gif' style={{ width: '200px' }} />
            </div>
          </CDBContainer>
        )}
      </section>
    );
}
