import styles from "./App.module.css";
import { Header } from "./components/Header";

import { PlusCircle } from "phosphor-react";
import { List } from "./components/List";
import { Input } from "./components/Input";

function App() {
  return (
    <div className={styles.containerPrincipal}>
      <Header />
      <main className={styles.content}>
        <div className={styles.newTask}>
          <Input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={16} color="var(--gray-100)" />
          </button>
        </div>

        <div className={styles.tasks}>
          <div className={styles.infoTasks}>
            <div className={styles.leftSide}>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>
            <div className={styles.rightSide}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </div>
          <List />
        </div>
      </main>
    </div>
  );
}

export default App;
