import styles from "./Card.module.css";

export function Doing() {
  return (
    <div className={styles.doing}>
      <h2>Fazendo</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Conferir o novo desafio 🚀</h3>
          <p>
            Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira
            possível
          </p>
          <div className={styles.tags}>
            <span>rocketseat</span>
            <span>desafio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doing;
