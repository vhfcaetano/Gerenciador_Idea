import styles from "./App.module.css";
import { InnerBar } from "./components/InnerBar";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <div className={styles.content}>
      <div className={styles.app}>
        <Menu />
        <main>
          <div className={styles.inner}>
            <InnerBar />
          </div>
        </main>
      </div>
    </div>
  );
}
