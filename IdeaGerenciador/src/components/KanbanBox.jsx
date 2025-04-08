import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

import styles from "./KanbanBox.module.css";

export const KanbanBox = ({ onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Titulo da Tarefa");
  const [description, setDescription] = useState("Descrição da tarefa");
  const [date, setDate] = useState("Data da Tarefa");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.KanbanBox}>
      {isEditing ? (
        <div className={styles.editing}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleSave}>
            <IoIosSave />
          </button>
        </div>
      ) : (
        <div className={styles.viewing}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{date}</p>
        </div>
      )}
      <div className={styles.buttons}>
        <button
          className={styles.viewingButton}
          onClick={() => setIsEditing(true)}
        >
          <CiEdit />
        </button>
        <button className={styles.deleteButton} onClick={onDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
