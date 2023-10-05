import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { AiFillEdit } from 'react-icons/ai';

import './inventory.css';

export default function Inventory() {

    function editProduct(id) {
        const product = info.find(prod => prod.id == id);
        console.log(product) 
    }

    let info = [{
        id: '1',
        name: 'Jonathan Poblet',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
    },
    {
        id: '2',
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170',
    },
    {
        id: '3',
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86',
    }]


    

    const columns = [
        {
            label: '',
            field: 'edit',
            width: 100,
        },
        {
            label: 'Id',
            field: 'id',
            width: 100,
        },
        {
            label: 'Nombre',
            field: 'name',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },
        },
        {
            label: 'Posición',
            field: 'position',
            width: 270,
        },
        {
            label: 'Oficina',
            field: 'office',
            width: 200,
        },
        {
            label: 'Años',
            field: 'age',
            sort: 'asc',
            width: 100,
        },
        {
            label: 'Dia de Inicio',
            field: 'date',
            sort: 'disabled',
            width: 150,
        },
        {
            label: 'Salario',
            field: 'salary',
            sort: 'disabled',
            width: 100,
        },
    ];

    const data = () => {
        for(let i = 0; i < info.length; i++) {
            info[i] = {
                edit: <button className='btn-sm btn-primary' onClick={() => editProduct(info[i].id)}><AiFillEdit/></button>,
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
        <section className='w-100 m-4 '>
            <article className='d-flex align-items-center mb-4 p-3 rounded inventory-title'>
                <h4 className='text-light mb-0'>INVENTARIO</h4>
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
    );
};
