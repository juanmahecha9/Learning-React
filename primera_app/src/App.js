import React, { Component } from "react";
import "./App.css";

/* importar datos de pruebas */
import tasks from "./sample/datos.json";
//console.log(task)
/* importar nuevo componente */
import Tasks from "./components/Tasks"

/* Funcion principal */
class App extends Component {
  /* Definir los datos que le pertenecen al componente */
  state = {
    tasks: tasks,
  };

  /* metodo render carga la informacion */
  render() {
    return (
      <div>
      <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
