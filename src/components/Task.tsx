import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

interface ITaskProps {
  description: string;
}

export function Task({ description }: ITaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" checked={true} id="checkbox1" />
      <label htmlFor="checkbox1" />
      <p>{description}</p>
      <Trash size={24} />
    </div>
  );
}
