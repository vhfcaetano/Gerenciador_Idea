import styles from "./InnerBar.module.css";
import { IoFilter } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export function InnerBar() {
  return (
    <div className={styles.inner}>
      <section className={styles.titleAvatar}>
        <h1>
          Board <img src="./assets/pencil.svg" alt="" />
        </h1>
        <img src="https://github.com/vhfcaetano.png" alt="avatar" />
      </section>
      <section className={styles.filter}>
        <button>
          <IoFilter className={styles.filterOutline} />
          <span>Filtrar</span>
        </button>
        <div className={styles.inputWrapper}>
          <IoMdSearch className={styles.searchOutline} />
          <input
            type="text"
            placeholder="Busque por cards, assuntos ou responsáveis..."
          />
        </div>
      </section>
    </div>
  );
}
