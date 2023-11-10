import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ dataFilter }) => {
  const usuarios = dataFilter.map((usuario) => (
    <tr className="align-middle" key={usuario.id}>
      <td>{usuario.nombre}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.cargo}</td>
      <td>{usuario.telefono}</td>
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
        </tr>
      </thead>
      <tbody>{usuarios}</tbody>
    </Table>
  );
};

export default Listado;
