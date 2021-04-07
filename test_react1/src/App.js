/* React acepta el hecho de que la lógica de renderizado está intrínsecamente 
unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, 
cómo cambia el estado con el tiempo y cómo se preparan los datos para su 
visualización. */

/* React internamente utiliza babel donde:
un ejemplo seria:
<h1>Hello World</h1> esto que se ve como HTML, internamente en React se traduce como
React.createElement("h1", null, "Hello World") */
import React from "react"; //biblioteca que permite crear interfaces
import "./App.css"; //importar los estilos de css
//funcion App() permite devolver que es o que se quiere pintar por pantalla

/* Crear componentes */
/* uso de propiedades con los componetes 
estos se comportanc como un objeto */
function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.mytext}</h3>
      {props.subtitle}
    </div>
  );
}

function HelloJuan() {
  return (
    <div id="id1">
      <Helloworld mytext="Juan, componente interno" />
    </div>
  );
}
/* Creacion de clases usando herencia de REACT */
class HelloWorld1 extends React.Component {
  // esto se comportara como una funcion

  /* manejo de estados */

  state = {
    show: true /* deja ver o no el compoente */,
  };

  /* Crear metodos */
  cambioEstado = () => {
    // uso de una funcion almacenada en una variabe
    alert("Cambio de estado de la clase");
    this.setState({
      show: !this.state.show,
    }); /* manejo de estados con las propiedades de React */
  };

  //llamar el metodo render para retornar la respuesta
  render() {
    //retorno
    //manejo de estados
    if (this.state.show) {
      // dentro de la clase toca usar this. ara llamar las variables
      return (
        <div id="hello">
          {/* en esto, no se accede a props como un parametro sino que se usa this.props que es ahora una propiedad */}
          <h3>{this.props.mytext}</h3>
          {this.props.subtitle}
          <br />
          <button onClick={this.cambioEstado}>
            Cambiar el estado de SHOW
          </button>{" "}
          {/* usar eventos de los botones */}
        </div>
      );
    } else {
      return (
        <div id="hello">
          <h3>NO SE PUEDE MOSTRAR EL COMPONETE</h3>
          <button onClick={this.cambioEstado}>Cambiar el estado de SHOW</button>
        </div>
      );
    }
  }
}

/* equivalentes de la funcion App */
/* const App = () => <div>This is my component: <Helloworld></Helloworld> </div> */

function App() {
  return (
    // esto no es HTML, se conoce como JSX,
    <div>
      This is my component:
      {/* paso de propiedades en el props, se pueden pasar cuantas caracteristicas sean necesarias o requeridas */}
      <Helloworld mytext="Hello Juan" subtitle="Hola.." />
      <Helloworld mytext="Hello world" subtitle="componente 2" />
      <Helloworld mytext="Juan" subtitle="componente 3" />
      <HelloJuan />
      {/* Estados de los componentes */}
      <br />
      <HelloWorld1
        mytext="Creando este componete con el uso de una clase"
        subtitle="extendiendo desde las propiedades de REACT"
      />
    </div>
  );
}

export default App;
