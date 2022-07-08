import { useState } from "react";

import styles from "./App.module.css";
import { Header } from "./components/Header";

import { PlusCircle } from "phosphor-react";
import { List } from "./components/List";
import { Input } from "./components/Input";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: 1,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 2.",
      isDone: false,
    },
    {
      id: 2,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 3.",
      isDone: false,
    },
    {
      id: 3,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 4.",
      isDone: false,
    },
    {
      id: 4,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 5.",
      isDone: false,
    },
  ]);

  const [description, setDescription] = useState("");

  function handleAddTask() {
    setTasks((prevState) => setTasks([...prevState, description]));
  }

  return (
    <div className={styles.containerPrincipal}>
      <Header />
      <main className={styles.content}>
        <div className={styles.newTask}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            description={description}
            setDescription={setDescription}
          />
          <button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="var(--gray-100)" />
          </button>
        </div>

        <div className={styles.tasks}>
          <div className={styles.infoTasks}>
            <div className={styles.leftSide}>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.rightSide}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </div>
          <List tasks={tasks} />
        </div>
      </main>
    </div>
  );
}

export default App;
