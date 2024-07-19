import React, { useState, useEffect } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { AiFillEdit } from 'react-icons/ai';
import { EmployeModalEdit } from '../../components/Modals/EmployeModalEdit';
import { EmployeModalAdd } from '../../components/Modals/EmployeModalAdd';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { urlBackend } from '../../services/urlBackend';

import { getCompanies } from '../../services/getCompanies';
import columns from './columns.json';

import './employes.css';

export default function Personal() {
  const [employes, setEmployes] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const handleCloseModalAdd = () => setShowModalAdd(false);
  const handleShowModalAdd = () => setShowModalAdd(true);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);

  const [employe, setEmploye] = useState({});

  useEffect(() => {
    async function getEmployes() {
      const response = await fetch(`${urlBackend}/api/employes`);
      const data = await response.json();
      setEmployes(data);
    }

    getEmployes();
    getCompanies(setCompanies);
  }, []);

  const data = () => {
    const formattedData = employes.map(employe => ({
      edit: (
        <button
          type='button'
          className='btn-sm btn-primary'
          onClick={() => {
            handleShowModalEdit();
            setEmploye(employe);
          }}
        >
          <AiFillEdit />
        </button>
      ),
      ...employe,
    }));

    return {
      columns,
      rows: formattedData,
    };
  };

  if (companies)
    return (
      <section className='employes fade-in'>
        <EmployeModalAdd
          companies={companies}
          show={showModalAdd}
          handleClose={handleCloseModalAdd}
        />
        <EmployeModalEdit
          employe={employe}
          companies={companies}
          show={showModalEdit}
          handleClose={handleCloseModalEdit}
        />
        <PageHeader title='EMPLEADOS' />
        <article className='d-flex align-items-center mb-4 rounded'>
          <button type='button' className='btn btn-success' onClick={() => handleShowModalAdd()}>
            Agregar Empleado
          </button>
        </article>
        {employes.length !== 0 ? (
          <CDBContainer className='p-0 bg-general w-100 m-0'>
            <CDBCard className='border-0 rounded'>
              <CDBCardBody className='p-4 w-100'>
                <CDBDataTable
                  noBottomColumns
                  searchLabel='Buscar'
                  paginationLabel={['Anterior', 'Siguiente']}
                  noRecordsFoundLabel='No se ha encontrado'
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
