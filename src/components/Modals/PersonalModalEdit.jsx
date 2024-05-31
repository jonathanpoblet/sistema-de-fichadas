import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

export default function PersonalModalEdit({ companies, show, handleClose, editablePersonal }) {
  const editPersonal = async () => {
    const nombre = document.getElementById("edit-personal-name").value;
    const apellido = document.getElementById("edit-personal-lastname").value;
    const age = document.getElementById("edit-personal-age").value;
    const dni = document.getElementById("edit-personal-dni").value;
    const email = document.getElementById("edit-personal-email").value;
    const cel = document.getElementById("edit-personal-cel").value;
    const empresa = document.getElementById("edit-personal-company").value;

    if (!nombre || !apellido || !dni || !email || !cel || !empresa) return Swal.fire("Faltan datos");

    const form = {
      nombre,
      apellido,
      age,
      dni,
      email,
      cel,
      empresa,
    };
  };

  return (
    <div className='modal show' style={{ display: "", position: "initial" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-primary text-light'>
          <Modal.Title>Editar Personal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='text' id='edit-personal-name' defaultValue={editablePersonal.nombre} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='text' id='edit-personal-lastname' defaultValue={editablePersonal.apellido} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>DNI</Form.Label>
              <Form.Control type='number' id='edit-personal-dni' defaultValue={editablePersonal.dni} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' id='edit-personal-email' defaultValue={editablePersonal.email} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Celular</Form.Label>
              <Form.Control type='text' id='edit-personal-cel' defaultValue={editablePersonal.cel} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Empresa</Form.Label>
              <Form.Select id='edit-personal-company' defaultValue={editablePersonal.empresa}>
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
          <Button variant='primary' onClick={editPersonal}>
            Editar Personal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
