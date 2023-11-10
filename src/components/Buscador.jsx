import React from "react";

const Buscador = ({data, dataFilter}) => {
  const inputHanlder = (e) =>{
    const buscarPalabra = e.target.value.toLowerCase()

    const resultado = data.filter(
      (usuario) =>
    usuario.nombre.toLowerCase().includes(buscarPalabra) ||
    usuario.correo.toLowerCase().includes(buscarPalabra) ||
    usuario.edad.includes(buscarPalabra) ||
    usuario.cargo.toLowerCase().includes(buscarPalabra) ||
    usuario.telefono.toLowerCase().includes(buscarPalabra)
    );
    dataFilter(resultado);
  };


  return (
    <div className="buscador col-12 col-md-5">  
        <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un Usuario"
        className="form-control mb-3"
        onChange={inputHanlder}
        ></input>
  </div>
  )
}

export default Buscador;