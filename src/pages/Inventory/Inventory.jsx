import React, { useState }  from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { AiFillEdit } from 'react-icons/ai';
import InventoryModalAdd from '../../components/Modals/InventoryModalAdd';
import InventoryModalEdit from '../../components/Modals/InventoryModalEdit';


import info from './info.json';
import columns from './columns.json';

import './inventory.css';

export default function Inventory() {

    const [showModalAdd, setShowModalAdd] = useState(false);
    const handleCloseModalAdd = () => setShowModalAdd(false);
    const handleShowModalAdd = () => setShowModalAdd(true);
    
    const [showModalEdit, setShowModalEdit] = useState(false);
    const handleCloseModalEdit = () => setShowModalEdit(false);
    const handleShowModalEdit = () => setShowModalEdit(true);

    const [editableProduct, setEditableProduct] = useState({});


    function editProduct(id) {
        const product = info.find(prod => prod.id == id);
        console.log(product)
    }

    function setEditModal(product) {
        console.log(product);
        setEditableProduct({
            brand: product.brand,
            model: product.model,
            type: product.type,
            serial: product.serial,
            date_purchase: product.date_purchase,
            cost: product.cost
        })
        // document.getElementById('edit-product-brand').value = product.brand;
    }

    const data = () => {
        const formattedData = info.map(product => ({
            edit: (
                <button  
                    type='button' 
                    className='btn-sm btn-primary' 
                    onClick={() => {
                        handleShowModalEdit();
                        setEditModal(product)
                    } }
                >
                    <AiFillEdit/>
                </button>
            ),
            ...product
        }));
    
        return {
            columns,
            rows: formattedData
        };
    };
    return (
        <>
            <section className='w-100 m-4 '>
                <InventoryModalAdd  show={showModalAdd} handleClose={handleCloseModalAdd} />
                <InventoryModalEdit  show={showModalEdit} handleClose={handleCloseModalEdit} editableProduct={ editableProduct } />
                <article className='d-flex align-items-center mb-4 p-3 rounded inventory-title'>
                    <h1 className='text-light mb-0 fs-4'>INVENTARIO</h1>
                </article>
                <article className='d-flex align-items-center mb-4 rounded'>
                    <button type='button' className='btn btn-success' onClick={
                        () => handleShowModalAdd()
                    }>
                        Agregar Producto
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
