import styles from "./App.module.css";
import { InnerBar } from "./components/InnerBar";
import { KanbanArea } from "./components/KanbanArea";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <div className={styles.content}>
      <div className={styles.app}>
        <Menu />
        <main>
          <div className={styles.inner}>
            <InnerBar />
            <KanbanArea />
            <footer>
              <p>Criado com ❤️ Victor Hugo</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
