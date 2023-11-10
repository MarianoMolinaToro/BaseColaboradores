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

  const agregarColaborador = (nuevoColaborador) => {
    setData((setData) => [...setData, nuevoColaborador]);
    setDataFilter((setDataFilter) => [...setDataFilter, nuevoColaborador]);
  };

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
          dataFilter={dataFilter} />
        </div>

        <div className='container-form'>
          <h3>Agregar colaborador </h3>
          <Formulario
            data={data}
            setData={setData}
            setDataFilter={setDataFilter}
            agregarColaborador={agregarColaborador}
            setError={setError}
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