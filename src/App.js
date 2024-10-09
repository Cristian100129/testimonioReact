import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='Contenedor-principal'>
      <h1 className='Titulo-pagina'>Testimonio</h1>
      <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='imagen'
      cargo='Ingeniera de software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. A pesar de que es uno de los lenguajes de programación más populares y ampliamente utilizados en el desarrollo web, mi experiencia con él ha sido todo menos sencilla. Desde que comencé a estudiar programación, JavaScript siempre me ha resultado un desafío debido a su sintaxis única, su manejo de eventos y su naturaleza asincrónica. He pasado horas tratando de entender conceptos como las promesas, las funciones anónimas, y el manejo de errores, pero a menudo me siento abrumado. '
      />
      <Testimonio
      nombre='Shaw Wang'
      pais='Singapur'
      imagen='logo192'
      cargo='Ingeniero de software'
      empresa='Amazon'
      testimonio="Siempre he tenido problemas para aprender JavaScript. A pesar de que es uno de los lenguajes de programación más populares y ampliamente utilizados en el desarrollo web, mi experiencia con él ha sido todo menos sencilla. Desde que comencé a estudiar programación, JavaScript siempre me ha resultado un desafío debido a su sintaxis única, su manejo de eventos y su naturaleza asincrónica. He pasado horas tratando de entender conceptos como las promesas."
      />
       <Testimonio
      nombre='Sarah China'
      pais='Nigeria'
      imagen='imagen'
      cargo='Ingeniero de software'
      empresa='charDesk'
      testimonio="Siempre he tenido problemas para aprender <strong>JavaScript</strong>. A pesar de que es uno de los lenguajes de programación más populares y ampliamente utilizados en el desarrollo web, mi experiencia con él ha sido todo menos sencilla. Desde que comencé a estudiar programación, <strong>JavaScript</strong> siempre me ha resultado un desafío debido a su sintaxis única, su manejo de eventos y su naturaleza asincrónica."
      />
      <Testimonio
      nombre='Sarah China'
      pais='Nigeria'
      imagen='imagen'
      cargo='Ingeniero de software'
      empresa='charDesk'
      testimonio="Siempre he tenido problemas para aprender <strong>JavaScript</strong>. A pesar de que es uno de los lenguajes de programación más populares y ampliamente utilizados en el desarrollo web, mi experiencia con él ha sido todo menos sencilla. Desde que comencé a estudiar programación, <strong>JavaScript</strong> siempre me ha resultado un desafío debido a su sintaxis única, su manejo de eventos y su naturaleza asincrónica."
      />
      </div>
    </div>
  );
}

export default App;
