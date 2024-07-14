import { FC, RefObject } from "react";
import { FaPlus } from "react-icons/fa";
import MAIN_PAGE_CONTENT from "../constants/constants";
import styles from "./styles/modal.module.scss";

interface AddNewItemProps {
  addText: string;
  handleSetAddText: (text: string) => void;
  handleText: (text: string | null, action: "add" | "edit" | "delete") => void;
  addInputRef: RefObject<HTMLInputElement>;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    action: "add" | "edit"
  ) => void;
}

const AddNewItem: FC<AddNewItemProps> = ({
  addText,
  handleSetAddText,
  handleText,
  addInputRef,
  handleKeyDown,
}) => (
  <div className={styles.modal__input_container}>
    <input
      type="text"
      placeholder={MAIN_PAGE_CONTENT.ADD_NEW}
      value={addText}
      onChange={(e) => handleSetAddText(e.target.value)}
      className={styles.modal__input}
      ref={addInputRef}
      onKeyDown={(e) => handleKeyDown(e, "add")}
    />
    <button
      className={`${styles.modal__btn} ${styles["modal__btn--modal"]}`}
      onClick={() => handleText(null, "add")}
    >
      <FaPlus />
    </button>
  </div>
);

export default AddNewItem;
