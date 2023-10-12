import React, { useState }  from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { AiFillEdit } from 'react-icons/ai';
import ClientsModalAdd from '../../components/Modals/ClientsModalAdd';
import ClientsModalEdit from '../../components/Modals/ClientsModalEdit';

import info from './info.json';
import columns from './columns.json';

import './clients.css';

export default function Clients() {

    const [showModalAdd, setShowModalAdd] = useState(false);
    const handleCloseModalAdd = () => setShowModalAdd(false);
    const handleShowModalAdd = () => setShowModalAdd(true);
    
    const [showModalEdit, setShowModalEdit] = useState(false);
    const handleCloseModalEdit = () => setShowModalEdit(false);
    const handleShowModalEdit = () => setShowModalEdit(true);

    const [editableClient, setEditableClient] = useState({});

    function setEditModal(client) {
        console.log(client);
        setEditableClient({
            name: client.name,
            lastname: client.lastname,
            age: client.age,
            dni: client.dni,
            email: client.email,
            cel: client.cel,
            domicile: client.domicile
        })
    }

    const data = () => {
        const formattedData = info.map(client => ({
            edit: (
                <button  
                    type='button' 
                    className='btn-sm btn-primary' 
                    onClick={() => {
                        handleShowModalEdit();
                        setEditModal(client)
                    } }
                >
                    <AiFillEdit/>
                </button>
            ),
            ...client,
        }));
    
        return {
            columns,
            rows: formattedData
        };
    };
    return (
        <>
            <section className='inventory fade-in p-4'>
                <ClientsModalAdd  show={showModalAdd} handleClose={handleCloseModalAdd} />
                <ClientsModalEdit  show={showModalEdit} handleClose={handleCloseModalEdit} editableClient={ editableClient } />
                <article className='d-flex align-items-center  p-3 rounded inventory-title'>
                    <h1 className='text-light mb-0 fs-4'>CLIENTES</h1>
                </article>
                <article className='d-flex align-items-center mb-4 rounded'>
                    <button type='button' className='btn btn-success' onClick={
                        () => handleShowModalAdd()
                    }>
                        Agregar Cliente
                    </button>
                </article>
                <CDBContainer className='p-0 bg-general' >
                    <CDBCard className='border-0 rounded'>
                        <CDBCardBody className='p-4'>
                        <CDBDataTable 
                            noBottomColumns
                            searchLabel='Buscar'
                            paginationLabel={["←", "→"]}
                            noRecordsFoundLabel="No se ha encontrado"
                            infoLabel={["Mostrando", "de", "de (", "datos )"]}
                            entriesLabel="Mostrar de a"
                            striped
                            responsive
                            hover
                            entriesOptions={[10, 50, 100]}
                            entries={10}
                            pagesAmount={4}
                            data={data()}
                        />
                        </CDBCardBody>
                    </CDBCard>
                </CDBContainer>
            </section>
        </>
    );
};
