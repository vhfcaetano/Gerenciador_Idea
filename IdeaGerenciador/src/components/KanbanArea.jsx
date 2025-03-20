import styles from "./KanbanArea.module.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdHideSource } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const initialTasks = {
  todo: [
    {
      id: "1",
      content: "",
      description: "",
    },
  ],
  doing: [],
  done: [],
};

export function KanbanArea() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null); // Estado para gerenciar edição
  const [editingContent, setEditingContent] = useState("");
  const [editingDescription, setEditingDescription] = useState(""); // Para editar descrição
  const [newTaskContent, setNewTaskContent] = useState(""); // Para adicionar nova tarefa
  const [newTaskDescription, setNewTaskDescription] = useState(""); // Para descrição da nova tarefa

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = Array.from(tasks[source.droppableId]);
    const [movedItem] = sourceColumn.splice(source.index, 1);

    const destinationColumn = Array.from(tasks[destination.droppableId]);
    destinationColumn.splice(destination.index, 0, movedItem);

    setTasks((prev) => ({
      ...prev,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn,
    }));
  };

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (!newTaskContent.trim()) return; // Não adiciona se o conteúdo estiver vazio
    const newTask = {
      id: Date.now().toString(), // Gera um ID único com timestamp
      content: newTaskContent,
      description: newTaskDescription,
      tags: [],
    };

    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask], // Adiciona à coluna "A fazer"
    }));

    // Limpa os campos do formulário
    setNewTaskContent("");
    setNewTaskDescription("");
  };

  // Função para apagar uma tarefa
  const deleteTask = (columnId, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [columnId]: prev[columnId].filter((task) => task.id !== taskId), // Remove o card pelo ID
    }));
  };

  // Função para iniciar a edição
  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditingContent(task.content);
    setEditingDescription(task.description);
  };

  // Função para salvar as edições
  const saveEditing = (columnId) => {
    setTasks((prev) => ({
      ...prev,
      [columnId]: prev[columnId].map((task) =>
        task.id === editingTask
          ? {
              ...task,
              content: editingContent,
              description: editingDescription,
            }
          : task
      ),
    }));
    setEditingTask(null);
    setEditingContent("");
    setEditingDescription("");
  };

  // Função para cancelar a edição
  const cancelEditing = () => {
    setEditingTask(null);
    setEditingContent("");
    setEditingDescription("");
  };

  const [showAddTask, setShowAddTask] = useState(false); // Estado para mostrar/ocultar

  return (
    <div>
      {/* Formulário para adicionar nova tarefa */}
      <div className={styles.addTask}>
        <div className={styles.addTaskShowHide}>
          <button onClick={() => setShowAddTask((prev) => !prev)}>
            {showAddTask ? <MdHideSource /> : <IoMdAddCircle />}
          </button>
        </div>
        <div
          className={`${styles.addTask} ${
            showAddTask ? styles.show : styles.hide
          }`}
        >
          <div className={styles.addTaskList}>
            <h2>Adicionar Nova Tarefa</h2>
            <input
              type="text"
              placeholder="Título da tarefa"
              value={newTaskContent}
              onChange={(e) => setNewTaskContent(e.target.value)}
            />
            <textarea
              placeholder="Descrição da tarefa"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <button onClick={addTask}>Adicionar</button>
          </div>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.kanban}>
          {Object.entries(tasks).map(([columnId, columnTasks]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  className={styles[columnId]}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2>
                    {columnId === "todo"
                      ? "A fazer"
                      : columnId === "doing"
                      ? "Fazendo"
                      : "Feito"}
                  </h2>
                  <div className={styles.cards}>
                    {columnTasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className={styles.card}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {editingTask === task.id ? (
                              <div className={styles.editTask}>
                                <input
                                  type="text"
                                  placeholder="Digite o titulo"
                                  value={editingContent}
                                  onChange={(e) =>
                                    setEditingContent(e.target.value)
                                  }
                                />
                                <textarea
                                  placeholder="Digite a Descrição"
                                  value={editingDescription}
                                  onChange={(e) =>
                                    setEditingDescription(e.target.value)
                                  }
                                />
                                <button onClick={() => saveEditing(columnId)}>
                                  Salvar
                                </button>
                                <button onClick={cancelEditing}>
                                  Cancelar
                                </button>
                              </div>
                            ) : (
                              <>
                                <h3>{task.content}</h3>
                                <p>{task.description}</p>
                                <div className={styles.taskBtn}>
                                  <button onClick={() => startEditing(task)}>
                                    <FaRegEdit className={styles.editIcon} />
                                  </button>
                                  <button
                                    onClick={() =>
                                      deleteTask(columnId, task.id)
                                    }
                                  >
                                    Apagar
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
