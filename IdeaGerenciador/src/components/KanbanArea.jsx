import { KanbanBox } from "./KanbanBox";
import { FaPlus } from "react-icons/fa";
import { LuStretchVertical } from "react-icons/lu";
import { useState } from "react";
import styles from "./KanbanArea.module.css";

export function KanbanArea() {
  const [tasksTodo, setTasksTodo] = useState([{ id: 1, title: "Nova Tarefa" }]);
  const [tasksDoing, setTasksDoing] = useState([
    { id: 1, title: "Nova Tarefa" },
  ]);
  const [tasksDone, setTasksDone] = useState([{ id: 1, title: "Nova Tarefa" }]);

  const addTask = () => {
    const newTask = { id: Date.now(), title: "Nova Tarefa" };
    setTasksTodo([...tasksTodo, newTask]);
  };

  const addTaskDoing = () => {
    const newTask = { id: Date.now(), title: "Nova Tarefa" };
    setTasksDoing([...tasksDoing, newTask]);
  };

  const addTaskDone = () => {
    const newTask = { id: Date.now(), title: "Nova Tarefa" };
    setTasksDone([...tasksDone, newTask]);
  };

  const deleteTask = (id) => {
    setTasksTodo(tasksTodo.filter((task) => task.id !== id));
  };

  const deleteTaskDoing = (id) => {
    setTasksDoing(tasksDoing.filter((task) => task.id !== id));
  };

  const deleteTaskDone = (id) => {
    setTasksDone(tasksDone.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.KanbanArea}>
      <div className={styles.Kanbantodo}>
        <div className={styles.HeaderKanban}>
          <h1>A FAZER</h1>
          <div className={styles.HeaderButtons}>
            <button className={styles.addButton} onClick={addTask}>
              <FaPlus />
            </button>
            <button className={styles.addButton}>
              <LuStretchVertical />
            </button>
          </div>
        </div>
        <ul>
          {tasksTodo.map((task) => (
            <li key={task.id}>
              <KanbanBox
                title={task.title}
                onDelete={() => deleteTask(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.KanbanDoing}>
        <div className={styles.HeaderKanban}>
          <h1>FAZENDO</h1>
          <div className={styles.HeaderButtons}>
            <button className={styles.addButton} onClick={addTaskDoing}>
              <FaPlus />
            </button>
            <button className={styles.addButton}>
              <LuStretchVertical />
            </button>
          </div>
        </div>
        <ul>
          {tasksDoing.map((task) => (
            <li key={task.id}>
              <KanbanBox
                title={task.title}
                onDelete={() => deleteTaskDoing(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.KanbanDone}>
        <div className={styles.HeaderKanban}>
          <h1>FEITO</h1>
          <div className={styles.HeaderButtons}>
            <button className={styles.addButton} onClick={addTaskDone}>
              <FaPlus />
            </button>
            <button className={styles.addButton}>
              <LuStretchVertical />
            </button>
          </div>
        </div>
        <ul>
          {tasksDone.map((task) => (
            <li key={task.id}>
              <KanbanBox
                title={task.title}
                onDelete={() => deleteTaskDone(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
