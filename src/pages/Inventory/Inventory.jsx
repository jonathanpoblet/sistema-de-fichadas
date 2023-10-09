import React, { useState }  from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { AiFillEdit } from 'react-icons/ai';

import './inventory.css';
import InventoryModal from '../../components/Modals/InventoryModal';

export default function Inventory() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function editProduct(id) {
        const product = info.find(prod => prod.id == id);
    }

    let info = [{
        id: '1',
        brand: 'World Fitness',
        model: 'A213',
        type: 'Banco Plano',
        serial: '125125afasffs61',
        date_purchase: '2020/04/25',
        cost: '320.500',
    },
    {
        id: '2',
        brand: 'Forza Gym',
        model: 'PL212',
        type: 'Maquina Multifunción',
        serial: '625121515sad3',
        date_purchase: '2021/07/25',
        cost: '1.090.242',
    },
    {
        id: '3',
        brand: 'World Fitness',
        model: 'SDAS2',
        type: 'Mancuernas',
        serial: '616316226atsa6',
        date_purchase: '2019/01/12',
        cost: '$15.000',
    }]


    

    const columns = [
        {
            label: '',
            field: 'edit',
            width: 100,
        },
        {
            label: 'Marca',
            field: 'brand',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },
        },
        {
            label: 'Modelo',
            field: 'model',
            width: 270,
        },
        {
            label: 'Tipo',
            field: 'type',
            width: 200,
        },
        {
            label: 'Número de Serie',
            field: 'serial',
            sort: 'asc',
            width: 100,
        },
        {
            label: 'Fecha de Compra',
            field: 'date_purchase',
            sort: 'disabled',
            width: 150,
        },
        {
            label: 'Costo',
            field: 'cost',
            sort: 'disabled',
            width: 100,
        },
    ];

    const data = () => {
        for(let i = 0; i < info.length; i++) {
            info[i] = {
                edit: <button className='btn-sm btn-primary' onClick={() => {
                    editProduct(info[i].id);
                }}><AiFillEdit/></button>,
                ...info[i] 
            };
        }
        console.log(info)
        return {
            columns,
            rows : info
        };
    };
    return (
        <>
            <section className='w-100 m-4 '>
                <InventoryModal  show={show} handleClose={handleClose} />
                <article className='d-flex align-items-center mb-4 p-3 rounded inventory-title'>
                    <h1 className='text-light mb-0 fs-4'>INVENTARIO</h1>
                </article>
                <article className='d-flex align-items-center mb-4 rounded'>
                    <button className='btn btn-success' data-toggle="modal" data-target="#add-inventory" onClick={
                        () => handleShow()
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
