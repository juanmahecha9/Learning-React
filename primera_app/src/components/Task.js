/* Archivo o componente para ingresar a solo una tarea */

import React, { Component } from "react";
/* importar estilos */
import "./Task.css";

class Task extends Component {
  /* cambiar los estilos dependiendo de las propiedades ingresadas */
  StyleComplete() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const { task } = this.props;
    return (
      <div className="tarea" style={this.StyleComplete()}>
        {task.id} - {task.title} - {task.description} - {task.done}
        <input className="done" type="checkbox" />
        <button className="btn" style={btnDelete}>
          x
        </button>
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
