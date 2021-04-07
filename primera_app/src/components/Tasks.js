/* componente de react Listado de Tareas (DEL ARRAY)*/

import React, { Component } from "react";
/* impotar Task */
import Task from "./Task"

class Tasks extends Component {
  render() {
    return this.props.tasks.map((task) => <Task key={task.id} task={task} />) /* retorno de los titulos del objeto */;
  }
}

export default Tasks;
