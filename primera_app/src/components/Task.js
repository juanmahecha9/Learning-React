/* Archivo o componente para ingresar a solo una tarea */

import React, { Component } from "react";
/* importar estilos */
import "./Task.css";

class Task extends Component {
  render() {
    const { task } = this.props;
    return (
      <div className="tarea">
        {task.title} -{task.description} -{task.done} -{task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </div>
    );
  }
}

/* para estilizar elementos */

const btnDelete = {
  fontSize: "18px",
  color: "white",
  background: "#000",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default Task;
