/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Listado = ({ dataFilter, eliminarColaborador , setColaboradorEditado, setIsEditing}) => {

  const handleDelete = (id) =>  {
    eliminarColaborador(id);
  }
  const handleEdit = (usuario) => {
    setIsEditing(true);
    setColaboradorEditado(usuario);
   }

  const usuarios = dataFilter.map((usuario) => (
  <tr className="align-middle" key={usuario.id}>
      <td>{usuario.nombre}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.cargo}</td>
      <td>{usuario.telefono}</td>
      <td>
      <ButtonGroup>
        <DropdownButton variant='Secondary' as={ButtonGroup}  title='' id="bg-nested-dropdown">
          <Dropdown.Item onClick={ () => handleDelete(usuario.id)} eventKey="eleminar">Eliminar</Dropdown.Item>
          <Dropdown.Item onClick={() => handleEdit(usuario)} eventKey="editar">Editar</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover variant="ligth" className='tabla ' >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Accion</th>
        </tr>
      </thead>
      { usuarios.length === 0
        ? <tbody><tr><td colSpan='6'>No hay colaboradores</td></tr></tbody>
        : <tbody>{usuarios}</tbody>
      }
    </Table>
  );
};

export default Listado;
