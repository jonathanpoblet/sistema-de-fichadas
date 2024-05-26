import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

export default function PersonalModalAdd({ show, handleClose }) {
  const addPersonal = async () => {
    const name = document.getElementById('add-personal-name').value;
    const lastname = document.getElementById('add-personal-lastname').value;
    const age = document.getElementById('add-personal-age').value;
    const dni = document.getElementById('add-personal-dni').value;
    const email = document.getElementById('add-personal-email').value;
    const cel = document.getElementById('add-personal-cel').value;
    const domicile = document.getElementById('add-personal-domicile').value;

    if (!name || !lastname || !age || !dni || !email || !cel || !domicile) return Swal.fire('Faltan datos');

    const form = {
      name,
      lastname,
      age,
      dni,
      email,
      cel,
      domicile,
    };

    console.log(form);
  };

  return (
    <div className='modal show' style={{ display: '', position: 'initial' }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-success text-light'>
          <Modal.Title>Agregar Personal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='text' id='add-personal-name' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='text' id='add-personal-lastname' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Edad</Form.Label>
              <Form.Control type='number' id='add-personal-age' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>DNI</Form.Label>
              <Form.Control type='number' id='add-personal-dni' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' id='add-personal-email' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Celular</Form.Label>
              <Form.Control type='text' id='add-personal-cel' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Domicilio</Form.Label>
              <Form.Control type='text' id='add-personal-domicile' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='success' onClick={addPersonal}>
            Cargar Personal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
