import React from 'react'; 
import '../estilos/Testimonio.css'

function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.png`)} alt='Foto 1' />
      <div className='contenedor-texto-testimonio' >
        <p className='Nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: props.testimonio }}/>
      </div>
    </div>
  ); 
}

export default Testimonio; 