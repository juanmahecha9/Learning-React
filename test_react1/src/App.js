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

function HelloJuan(){
  return(
    <div>
      <Helloworld mytext="Juan, componente interno"/>
    </div>
  )
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
      <HelloJuan/>
    </div>
  );
}

export default App;
