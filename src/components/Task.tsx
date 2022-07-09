import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

interface ITaskProps {
  id: string;
  description: string;
  isDone: boolean;
  onHandleClickedCheckbox: (id: string) => void;
  onHandleDeleteTask: (id: string) => void;
}

export function Task({
  id,
  description,
  isDone,
  onHandleClickedCheckbox,
  onHandleDeleteTask,
}: ITaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" checked={isDone} id="checkbox1" readOnly />
      <label htmlFor="checkbox1" onClick={() => onHandleClickedCheckbox(id)} />
      <p className={!isDone ? styles.taskUndone : styles.taskDone}>
        {description}
      </p>

      <Trash size={24} onClick={() => onHandleDeleteTask(id)} />
    </div>
  );
}
