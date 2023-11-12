/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ setError, isEditing,colaboradorEditado, editarColaborador, agregarColaborador }) => {
 
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const validarDatos = (e) => {
    e.preventDefault();
    const { nombre, correo, edad, cargo, telefono } = formData;
    const validarDatos =
    !nombre || !correo || !edad || !cargo || !telefono;
    const validarCorreo = !/\S+@\S+\.\S+/.test(correo);
    const validarEdad = isNaN(Number(edad)); 
    const validarTelefono = isNaN(Number(telefono)); 

    if (validarDatos) {
      setError({
        error: true,
        msg: 'Completa todos los campos!',
        color: 'warning',
      });
    } else if (validarCorreo) {
      setError({
        error: true,
        msg: 'Ingresa un correo electrónico válido',
        color: 'warning',
      });
    } else if (validarEdad) {
      setError({
        error: true,
        msg: 'Ingresa una edad válida (solo números)',
        color: 'warning',
      });
    } else if (validarTelefono) {
      setError({
        error: true,
        msg: 'Ingresa un número de teléfono válido',
        color: 'warning',
      });
    } else {
      const nuevoColaborador = {
        id: new Date().getTime(),
        nombre,
        correo,  
        edad,
        cargo,
        telefono,
      };

      if (isEditing) { 
        editarColaborador(colaboradorEditado.id, nuevoColaborador);
        resetFormData()
        return;
      }
      agregarColaborador(nuevoColaborador);
      resetFormData()
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  useEffect(() => {
    if (isEditing) {
      setError({
        error: false,
        msg: '',
        color: '',
      })
       setFormData(colaboradorEditado)
    } else { 
       resetFormData();
    }
  }, [isEditing, colaboradorEditado, setError]);

  const resetFormData = () => { 
    setFormData({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  }

  return (
    <div>
      <Form onSubmit={(e) => validarDatos(e)} >
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Control
            className="mb-3"
            type="text"
            name="nombre"
            placeholder="Nombre del colaborador"
            onChange={handleChange}
            value={formData.nombre}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            className="mb-3"
            type="email"
            name="correo"
            placeholder="tuemail@ejemplo.com"
            onChange={handleChange}
            value={formData.correo}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEdad">
          <Form.Control
            className="mb-3"
            type="text"
            inputMode='numeric'
            name="edad"
            placeholder="Edad del colaborador"
            onChange={handleChange}
            value={formData.edad}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCargo">
          <Form.Control
            className="mb-3"
            type="text"
            name="cargo"
            placeholder="Cargo del colaborador"
            onChange={handleChange}
            value={formData.cargo}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Control
            className="mb-3"
            type="tel"
            name="telefono"
            placeholder="Teléfono del colaborador"
            onChange={handleChange}
            value={formData.telefono}
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100 mb-2">
          {isEditing ? 'Editar colaborador' : 'Agregar colaborador'}
        </Button>
      </Form>
    
    </div>
  );
};

export default Formulario;
