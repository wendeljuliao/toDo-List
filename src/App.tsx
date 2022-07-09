import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import { Header } from "./components/Header";

import { PlusCircle } from "phosphor-react";
import { List } from "./components/List";
import { Input } from "./components/Input";

interface ITask {
  id: number;
  description: string;
  isDone: boolean;
}

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

  const [tasksDone, setTasksDone] = useState(0);

  const [description, setDescription] = useState("");

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      {
        id: tasks.length,
        description: description,
        isDone: false,
      },
    ]);

    setDescription("");
  }

  function handleClickedCheckbox(id: number) {
    const tasksUpdated = tasks.filter((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    checkTasksDone(tasksUpdated);

    setTasks(tasksUpdated);
  }

  function handleDeleteTask(id: number) {
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
