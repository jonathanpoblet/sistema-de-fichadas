import React, { useState, useEffect } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import { AiFillEdit } from "react-icons/ai";
import PersonalModalAdd from "../../components/Modals/PersonalModalAdd";
import PersonalModalEdit from "../../components/Modals/PersonalModalEdit";
import { getCompanies } from "../../services/getCompanies";

import columns from "./columns.json";

import "./Personal.css";

export default function Clients() {
  const [personal, setPersonal] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const handleCloseModalAdd = () => setShowModalAdd(false);
  const handleShowModalAdd = () => setShowModalAdd(true);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);

  const [editablePersonal, setEditablePersonal] = useState({});

  useEffect(() => {
    async function getPersonal() {
      const response = await fetch("http://grupotaraborelli.com/lib/backend/fichadas/get-datos-empleados.php");
      const data = await response.json();
      console.log(data);
      setPersonal(data);
    }

    getPersonal();
    getCompanies(setCompanies);
  }, []);

  function setEditModal(client) {
    setEditablePersonal({
      nombre: client.nombre,
      apellido: client.apellido,
      dni: client.dni,
      email: client.email,
      cel: client.cel,
      empresa: client.empresa_origen,
    });
  }

  const data = () => {
    const formattedData = personal.map(client => ({
      edit: (
        <button
          type='button'
          className='btn-sm btn-primary'
          onClick={() => {
            handleShowModalEdit();
            setEditModal(client);
          }}
        >
          <AiFillEdit />
        </button>
      ),
      ...client,
    }));

    return {
      columns,
      rows: formattedData,
    };
  };

  if (personal && companies)
    return (
      <>
        <section className='personal fade-in'>
          <PersonalModalAdd show={showModalAdd} handleClose={handleCloseModalAdd} />
          <PersonalModalEdit companies={companies} show={showModalEdit} handleClose={handleCloseModalEdit} editablePersonal={editablePersonal} />
          <article className='d-flex align-items-center  p-3 rounded personal-title'>
            <h1 className='text-light mb-0 fs-4'>PERSONAL</h1>
          </article>
          <article className='d-flex align-items-center mb-4 rounded'>
            <button type='button' className='btn btn-success' onClick={() => handleShowModalAdd()}>
              Agregar Personal
            </button>
          </article>
          <CDBContainer className='p-0 bg-general w-100 m-0'>
            <CDBCard className='border-0 rounded'>
              <CDBCardBody className='p-4 w-100'>
                <CDBDataTable
                  noBottomColumns
                  searchLabel='Buscar'
                  paginationLabel={["Anterior", "Siguiente"]}
                  noRecordsFoundLabel='No se ha encontrado'
                  infoLabel={["Mostrando", "de", "de (", "datos )"]}
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
        </section>
      </>
    );
}
