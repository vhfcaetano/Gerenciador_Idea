import styles from "./Card.module.css";

export function ToDo() {
  return (
    <div className={styles.todo}>
      <h2>A fazer</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>#boraCodar um Kanban 🧑🏾‍💻</h3>
          <p>
            Novo desafio do #boraCodar da Rocketseat, onde é proposto construir
            um quadro de Kanban.
          </p>
          <div className={styles.tags}>
            <span>rocketseat</span>
            <span>desafio</span>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Manter a ofensiva 🔥</h3>
          <p>
            Manter minha atividade na plataforma da Rocketseat para não perder a
            ofensiva
          </p>
          <div className={styles.tags}>
            <span>rocketseat</span>
          </div>
        </div>
      </div>
    </div>
  );
}
