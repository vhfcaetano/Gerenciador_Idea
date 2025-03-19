import styles from "./Card.module.css";

export function Done() {
  return (
    <div className={styles.done}>
      <h2>Feito</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>#boraCodar uma página de login 🧑‍💻</h3>
          <p>
            Novo desafio do #boraCodar da Rocketseat, onde é proposto construir
            uma página de login.
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
