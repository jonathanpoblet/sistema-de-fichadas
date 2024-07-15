import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

export function EmployeModalAdd({ companies, show, handleClose }) {
  const addEmploye = async () => {
    const nombre = document.getElementById('add-employe-name').value;
    const apellido = document.getElementById('add-employe-lastname').value;
    const dni = document.getElementById('add-employe-dni').value;
    const email = document.getElementById('add-employe-email').value;
    const cel = document.getElementById('add-employe-cel').value;
    const empresa = document.getElementById('add-employe-domicile').value;

    if (!nombre || !apellido || !dni || !email || !cel || !empresa)
      return Swal.fire('Faltan datos');

    const form = {
      nombre,
      apellido,
      dni,
      email,
      cel,
      empresa,
    };
  };

  return (
    <div className='modal show' style={{ display: '', position: 'initial' }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-success text-light'>
          <Modal.Title>Agregar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='text' id='add-employe-name' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='text' id='add-employe-lastname' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>DNI</Form.Label>
              <Form.Control type='number' id='add-employe-dni' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' id='add-employe-email' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Celular</Form.Label>
              <Form.Control type='text' id='add-employe-cel' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Empresa</Form.Label>
              <Form.Select id='add-employe-company'>
                <option value=''>--- Seleccione la empresa ---</option>
                {companies.map(company => {
                  console.log(company);
                  return (
                    <option key={company.id_company} value={company.id_company}>
                      {company.company}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='success' onClick={addEmploye}>
            Cargar Empleado
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
