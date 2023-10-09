import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

export default function InventoryModalEdit({ show, handleClose, editableProduct }) {

  const editProduct = async() => {
    const brand = document.getElementById('edit-product-brand').value
    const model = document.getElementById('edit-product-model').value
    const type = document.getElementById('edit-product-type').value
    const serial = document.getElementById('edit-product-serial').value
    const date_purchase = document.getElementById('edit-product-datePurchase').value
    const cost = document.getElementById('edit-product-cost').value

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
        <Modal.Header closeButton className='bg-primary text-light' >
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Marca</Form.Label>
              <Form.Control type='text' id='edit-product-brand' defaultValue={ editableProduct.brand } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Modelo</Form.Label>
              <Form.Control type='text' id='edit-product-model'  defaultValue={ editableProduct.model } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Tipo</Form.Label>
              <Form.Select id='edit-product-type'  defaultValue={ editableProduct.type } >
                <option value=''>--- Seleccione el tipo ---</option>
                <option value='Pesas'>Pesas</option>
                <option value='Máquinas de cardio'>Máquinas de Cardio</option>
                <option value='MultiPower'>MultiPower</option>
                <option value='Bancos'>Bancos</option>
                <option value='Barras'>Barras</option>
                <option value='Mancuernas'>Mancuernas</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Número de Serie</Form.Label>
              <Form.Control type='text' id='edit-product-serial' defaultValue={ editableProduct.serial } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Fecha de Compra</Form.Label>
              <Form.Control type='date' id='edit-product-datePurchase' defaultValue={ editableProduct.date_purchase } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Costo</Form.Label>
              <Form.Control type='number' id='edit-product-cost' defaultValue={ editableProduct.cost }  />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={editProduct}>
            Editar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

