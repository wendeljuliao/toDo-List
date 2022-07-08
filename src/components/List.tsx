import styles from "./List.module.css";

import clipBoard from "./../assets/Clipboard.svg";

export function List() {
  return (
    <div className={styles.list}>
      <img src={clipBoard} alt="Prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
