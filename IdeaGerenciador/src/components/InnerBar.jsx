import styles from "./InnerBar.module.css";

export function InnerBar() {
  return (
    <div className={styles.inner}>
      <section className={styles.titleAvatar}>
        <h1>
          Equipe <img src="./assets/pencil.svg" alt="" />
        </h1>
        <img src="https://github.com/vhfcaetano.png" alt="avatar" />
      </section>
      <section></section>
    </div>
  );
}
