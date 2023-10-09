import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

export default function InventoryModalAdd({ show, handleClose }) {

  const addProduct = async() => {
    const brand = document.getElementById('add-product-brand').value
    const model = document.getElementById('add-product-model').value
    const type = document.getElementById('add-product-type').value
    const serial = document.getElementById('add-product-serial').value
    const date_purchase = document.getElementById('add-product-datePurchase').value
    const cost = document.getElementById('add-product-cost').value

    if(!brand || !model || !type || !serial || !date_purchase || !cost) return Swal.fire('Faltan datos')

    const form = {
      brand,
      model,
      type,
      serial,
      date_purchase,
      cost
    }

    console.log(form)
  }

  return (
    <div
      className='modal show'
      style={{ display: '', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-success text-light' >
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Marca</Form.Label>
              <Form.Control type='text' id='add-product-brand' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Modelo</Form.Label>
              <Form.Control type='text' id='add-product-model'  />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Tipo</Form.Label>
              <Form.Select id='add-product-type' >
                <option value=''>--- Seleccione el tipo ---</option>
                <option value='Pesas'>Pesas</option>
                <option value='Máquinas de cardio'>Máquinas de Cardio</option>
                <option value='Bancos'>Bancos</option>
                <option value='Barras'>Barras</option>
                <option value='Mancuernas'>Mancuernas</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Número de Serie</Form.Label>
              <Form.Control type='text' id='add-product-serial' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Fecha de Compra</Form.Label>
              <Form.Control type='date' id='add-product-datePurchase' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Costo</Form.Label>
              <Form.Control type='number' id='add-product-cost' />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='success' onClick={addProduct}>
            Cargar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

