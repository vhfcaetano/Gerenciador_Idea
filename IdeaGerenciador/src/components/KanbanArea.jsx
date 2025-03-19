import styles from "./KanbanArea.module.css";
import { Doing } from "./Doing";
import { Done } from "./Done";
import { ToDo } from "./ToDo";

export function KanbanArea() {
  return (
    <section className={styles.kanban}>
      <ToDo />
      <Doing />
      <Done />
    </section>
  );
}
