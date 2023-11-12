import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import db from './assets/BaseColaboradores';
import Alert from './components/Alert';


function App() {
  const [data, setData] = useState(db);
  const [dataFilter, setDataFilter] = useState(data);

  const [error, setError] = useState({ error: false, msg: '', color: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [colaboradorEditado, setColaboradorEditado] = useState({});

  const agregarColaborador = (nuevoColaborador) => {
    setData((setData) => [...setData, nuevoColaborador]);
    setDataFilter((setDataFilter) => [...setDataFilter, nuevoColaborador]);
    setError({
      error: true,
      msg: 'Colaborador agregado correctamente',
      color: 'success',
    });
    resetError();
  };

  const eliminarColaborador = (id) => { 
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setDataFilter(newData);
    setError({
      error: true,
      msg: 'Colaborador eliminado correctamente',
      color: 'danger',
    });
    resetError();
  }
  const editarColaborador = (id, colaboradorEditado) => { 
    if (isEditing) { 
      const newData = data.map((item) => (item.id === id ? colaboradorEditado : item));
      setData(newData);
      setDataFilter(newData);
      setIsEditing(false);
      setColaboradorEditado({});
      setError({
        error: true,
        msg: 'Colaborador editado correctamente',
        color: 'success',
      });
      resetError();
    }
  }

  const resetError = () => {
   setTimeout(() => {
      setError({ error: false, msg: '', color: '' });
    }, 1200);
  }
  return (
    <>
      <div className='container1'>
        <h1>Lista de colaboradores</h1>
        <Buscador data={data} dataFilter={setDataFilter} />
      </div>

      <div className='container2'>
        <div className='container-lista'>
          <Listado 
          data={data}
          dataFilter={dataFilter} 
          eliminarColaborador={eliminarColaborador}
          setIsEditing={setIsEditing}
          setColaboradorEditado={setColaboradorEditado}
          />
        </div>

        <div className='container-form'>
          <h3>Agregar colaborador </h3>
          <Formulario
            setData={setData}
            setDataFilter={setDataFilter}
            agregarColaborador={agregarColaborador}
            editarColaborador={editarColaborador}
            setError={setError}
            isEditing={isEditing}
            colaboradorEditado={colaboradorEditado}
          />
        
        {error.error && (
        <Alert error={error.error} msg={error.msg} color={error.color} />
      )}
        </div>
      </div>
    </>
  );
}

export default App;