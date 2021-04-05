import React from "react"; //biblioteca que permite crear interfaces
import ReactDOM from "react-dom"; //biblioteca que permite crear interfaces para la web
//para desarrollo
import "./index.css"; // importa el archivo css con un webpack
import App from "./App"; //
import reportWebVitals from "./reportWebVitals"; 

//linea de ejecucion del proyecto
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* // que archivo se va a renderizar */}
  </React.StrictMode>,
  document.getElementById("root") // donde se va renderizar el proyecto
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
