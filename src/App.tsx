import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import { Header } from "./components/Header";

import { PlusCircle } from "phosphor-react";
import { List } from "./components/List";
import { Input } from "./components/Input";

import { v4 as uuid } from "uuid";

interface ITask {
  id: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: uuid(),
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 2.",
      isDone: false,
    },
    {
      id: uuid(),
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 3.",
      isDone: false,
    },
    {
      id: uuid(),
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 4.",
      isDone: false,
    },
    {
      id: uuid(),
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 5.",
      isDone: false,
    },
  ]);

  const [tasksDone, setTasksDone] = useState(0);

  const [description, setDescription] = useState("");

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      {
        id: uuid(),
        description: description,
        isDone: false,
      },
    ]);

    setDescription("");
  }

  function handleClickedCheckbox(id: string) {
    const tasksUpdated = tasks.filter((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    checkTasksDone(tasksUpdated);

    setTasks(tasksUpdated);
  }

  function handleDeleteTask(id: string) {
    const tasksUpdated = tasks.filter((task) => task.id !== id);

    checkTasksDone(tasksUpdated);

    setTasks(tasksUpdated);
  }

  function checkTasksDone(tasksUpdated: ITask[]) {
    const tasksDone = tasksUpdated.filter((task) => task.isDone === true);
    setTasksDone(tasksDone.length);
  }

  return (
    <div className={styles.containerPrincipal}>
      <Header />
      <main className={styles.content}>
        <form className={styles.newTask} onSubmit={handleAddTask}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            description={description}
            setDescription={setDescription}
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} color="var(--gray-100)" />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.infoTasks}>
            <div className={styles.leftSide}>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.rightSide}>
              <strong>Concluídas</strong>
              <span>
                {!tasksDone ? tasksDone : `${tasksDone} de ${tasks.length}`}
              </span>
            </div>
          </div>
          <List
            tasks={tasks}
            handleClickedCheckbox={handleClickedCheckbox}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
