import { FC, RefObject } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import styles from "./styles/modal.module.scss";

interface ItemListProps {
  data: string[];
  editingIndex: number | null;
  editText: string;
  handleEditText: (text: string) => void;
  handleStartEditing: (index: number) => void;
  handleText: (text: string | null, action: "add" | "edit" | "delete") => void;
  handleDeleteEditingItem: () => void;
  handleDeleteItem: (text: string) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    action: "add" | "edit"
  ) => void;
  editInputRef: RefObject<HTMLInputElement>;
}

const ItemList: FC<ItemListProps> = ({
  data,
  editingIndex,
  editText,
  handleEditText,
  handleStartEditing,
  handleText,
  handleDeleteEditingItem,
  handleDeleteItem,
  handleKeyDown,
  editInputRef,
}) => (
  <Droppable droppableId="droppable">
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={styles.modal__item_list}
      >
        {data.map((text, index) => (
          <Draggable key={index} draggableId={String(index)} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={styles["modal__text-overlay"]}
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => handleEditText(e.target.value)}
                    className={styles.modal__input}
                    ref={editInputRef}
                    onKeyDown={(e) => handleKeyDown(e, "edit")}
                  />
                ) : (
                  <p className={styles.modal__text}>{text}</p>
                )}
                <div className={styles["modal__btn-container"]}>
                  {editingIndex === index ? (
                    <>
                      <button
                        className={styles.modal__btn}
                        onClick={() => handleText(text, "edit")}
                      >
                        <FaSave />
                      </button>
                      <button
                        className={styles.modal__btn}
                        onClick={handleDeleteEditingItem}
                      >
                        <FaTrash />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={styles.modal__btn}
                        onClick={() => handleStartEditing(index)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className={styles.modal__btn}
                        onClick={() => handleDeleteItem(text)}
                        disabled={data.length <= 3}
                      >
                        <FaTrash />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ItemList;
