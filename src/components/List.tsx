import { useState } from "react";

import styles from "./List.module.css";

import clipBoard from "./../assets/Clipboard.svg";
import { Task } from "./Task";

interface IListTasks {
  tasks: {
    id: string;
    description: string;
    isDone: boolean;
  }[];
  handleClickedCheckbox: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function List({
  tasks,
  handleClickedCheckbox,
  handleDeleteTask,
}: IListTasks) {
  return tasks.length === 0 ? (
    <div className={styles.list}>
      <img src={clipBoard} alt="Prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  ) : (
    <div className={styles.listWithTasks}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            isDone={task.isDone}
            onHandleClickedCheckbox={handleClickedCheckbox}
            onHandleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </div>
  );
}
