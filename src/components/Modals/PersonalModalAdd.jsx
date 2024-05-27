import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

export default function PersonalModalAdd({ companies, show, handleClose }) {
  const addPersonal = async () => {
    const nombre = document.getElementById("add-personal-name").value;
    const apellido = document.getElementById("add-personal-lastname").value;
    const dni = document.getElementById("add-personal-dni").value;
    const email = document.getElementById("add-personal-email").value;
    const cel = document.getElementById("add-personal-cel").value;
    const empresa = document.getElementById("add-personal-domicile").value;

    if (!nombre || !apellido || !dni || !email || !cel || !empresa) return Swal.fire("Faltan datos");

    const form = {
      nombre,
      apellido,
      dni,
      email,
      cel,
      empresa,
    };

    console.log(form);
  };

  return (
    <div className='modal show' style={{ display: "", position: "initial" }}>
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
              <Form.Label>Empresa</Form.Label>
              <Form.Select id='add-personal-company'>
                <option value=''>--- Seleccione la empresa ---</option>
                {companies.map(company => {
                  return (
                    <option key={company.id_int_empresas} value={company.id_int_empresas}>
                      {company.empresa}
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
          <Button variant='success' onClick={addPersonal}>
            Cargar Personal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
