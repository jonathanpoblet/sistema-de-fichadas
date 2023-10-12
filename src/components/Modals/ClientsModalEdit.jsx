import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

export default function ClientsModalEdit({ show, handleClose, editableClient }) {

  const editClient = async() => {
    const name = document.getElementById('edit-client-name').value
    const lastname = document.getElementById('edit-client-lastname').value
    const age = document.getElementById('edit-client-age').value
    const dni = document.getElementById('edit-client-dni').value
    const email = document.getElementById('edit-client-email').value
    const cel = document.getElementById('edit-client-cel').value
    const domicile = document.getElementById('edit-client-domicile').value


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
        <Modal.Header closeButton className='bg-primary text-light' >
          <Modal.Title>Editar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='text' id='edit-client-name' defaultValue={ editableClient.name } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='text' id='edit-client-lastname'  defaultValue={ editableClient.lastname } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Edad</Form.Label>
              <Form.Control type='number' id='edit-client-age'  defaultValue={ editableClient.age }  />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>DNI</Form.Label>
              <Form.Control type='number' id='edit-client-dni' defaultValue={ editableClient.dni } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' id='edit-client-email' defaultValue={ editableClient.email } />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Celular</Form.Label>
              <Form.Control type='text' id='edit-client-cel' defaultValue={ editableClient.cel }  />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Domicilio</Form.Label>
              <Form.Control type='text' id='edit-client-domicile' defaultValue={ editableClient.domicile }  />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={editClient}>
            Editar Cliente
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

