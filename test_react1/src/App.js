/* React acepta el hecho de que la lógica de renderizado está intrínsecamente 
unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, 
cómo cambia el estado con el tiempo y cómo se preparan los datos para su 
visualización. */

/* React internamente utiliza babel donde:
un ejemplo seria:
<h1>Hello World</h1> esto que se ve como HTML, internamente en React se traduce como
React.createElement("h1", null, "Hello World") */

import "./App.css"; //importar los estilos de css
//funcion App() permite devolver que es o que se quiere pintar por pantalla
function App() {
  return (
    // esto no es HTML, se conoce como JSX,
    <div>Hello world...</div>
  );
}


export default App;
