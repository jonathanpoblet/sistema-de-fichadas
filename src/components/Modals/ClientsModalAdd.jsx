import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

export default function ClientsModalAdd({ show, handleClose }) {

  const addClient = async() => {
    const name = document.getElementById('add-client-name').value
    const lastname = document.getElementById('add-client-lastname').value
    const age = document.getElementById('add-client-age').value
    const dni = document.getElementById('add-client-dni').value
    const email = document.getElementById('add-client-email').value
    const cel = document.getElementById('add-client-cel').value
    const domicile = document.getElementById('add-client-domicile').value

    if(!name || !lastname || !age || !dni || !email || !cel || !domicile) return Swal.fire('Faltan datos')

    const form = {
      name,
      lastname,
      age,
      dni,
      email,
      cel,
      domicile
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
          <Modal.Title>Agregar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='text' id='add-client-name' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='text' id='add-client-lastname'  />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Edad</Form.Label>
              <Form.Control type='number' id='add-client-age'  />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>DNI</Form.Label>
              <Form.Control type='number' id='add-client-dni' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' id='add-client-email' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Celular</Form.Label>
              <Form.Control type='text' id='add-client-cel' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Domicilio</Form.Label>
              <Form.Control type='text' id='add-client-domicile' />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='success' onClick={addClient}>
            Cargar Cliente
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

