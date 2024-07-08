import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';

export function EmployeModalEdit({ companies, show, handleClose, editableEmployes }) {
  const editEmploye = async () => {
    const name = document.getElementById('edit-employe-name').value;
    const lastname = document.getElementById('edit-employe-lastname').value;
    const age = document.getElementById('edit-employe-age').value;
    const dni = document.getElementById('edit-employe-dni').value;
    const email = document.getElementById('edit-employe-email').value;
    const sector = document.getElementById('edit-employe-sector').value;
    const position = document.getElementById('edit-employe-position').value;
    const id_company = document.getElementById('edit-employe-company').value;

    if (!name || !lastname || !dni || !email || !sector || !position || !id_company)
      return Swal.fire('Faltan datos');

    const form = {
      name,
      lastname,
      age,
      dni,
      email,
      sector,
      position,
      id_company,
    };
  };

  return (
    <div className='modal show' style={{ display: '', position: 'initial' }}>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton className='bg-primary text-light'>
          <Modal.Title>Editar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type='text'
                    id='edit-employe-name'
                    defaultValue={editableEmployes.name}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type='text'
                    id='edit-employe-lastname'
                    defaultValue={editableEmployes.lastname}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type='number'
                    id='edit-employe-dni'
                    defaultValue={editableEmployes.dni}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    id='edit-employe-email'
                    defaultValue={editableEmployes.email}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Sector</Form.Label>
                  <Form.Control
                    type='text'
                    id='edit-employe-sector'
                    defaultValue={editableEmployes.sector}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Posición</Form.Label>
                  <Form.Control
                    type='text'
                    id='edit-employe-position'
                    defaultValue={editableEmployes.position}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Empresa</Form.Label>
                  <Form.Select id='edit-employe-company' defaultValue={editableEmployes.id_company}>
                    <option value=''>--- Seleccione la empresa ---</option>
                    {companies.map(company => (
                      <option key={company.id_company} value={company.id_company}>
                        {company.company}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={editEmploye}>
            Editar Empleado
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
