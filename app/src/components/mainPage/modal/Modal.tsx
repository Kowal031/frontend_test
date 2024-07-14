import { FC, useRef, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ActionType from "../../../types/modalActionType";
import CommonSnackbar from "../../common/CommonSnackbar";
import MAIN_PAGE_CONTENT from "../constants/constants";
import AddNewItem from "./AddNewItem";
import ItemList from "./ItemList";
import ModalHeader from "./ModalHeader";
import styles from "./styles/modal.module.scss";

interface ModalProps {
  handleChangeModal: (value: boolean) => void;
  textInOption: string[];
  handleSetTextInOption: (texts: string[]) => void;
}

const Modal: FC<ModalProps> = ({
  textInOption,
  handleChangeModal,
  handleSetTextInOption,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [addText, setAddText] = useState<string>("");
  const [editText, setEditText] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement | null>(null);
  const addInputRef = useRef<HTMLInputElement | null>(null);
  const { ACTION, ERROR_MESSAGE, TEXT_LIST } = MAIN_PAGE_CONTENT;

  const showErrorSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleManageTextAction = (text: string | null, action: ActionType) => {
    const inputText =
      action === ACTION.ADD
        ? addText
        : action === ACTION.EDIT
        ? editText
        : text;

    const isInputEmpty = !inputText?.trim();
    const doesInputExist = inputText && textInOption.includes(inputText);
    const isEditingCurrentText = inputText === textInOption[editingIndex!];

    if (action === ACTION.ADD && (isInputEmpty || doesInputExist)) {
      return showErrorSnackbar(
        isInputEmpty
          ? ERROR_MESSAGE.NO_EMPTY_VALUE
          : ERROR_MESSAGE.ELEMENT_EXISTS
      );
    }

    if (
      action === ACTION.EDIT &&
      (isInputEmpty || (!isEditingCurrentText && doesInputExist))
    ) {
      return showErrorSnackbar(
        isInputEmpty
          ? ERROR_MESSAGE.NO_EMPTY_VALUE
          : ERROR_MESSAGE.ELEMENT_EXISTS
      );
    }

    const updatedTextInOption = {
      add: [...textInOption, inputText!],
      edit: textInOption.map((item, index) =>
        index === editingIndex ? inputText : item
      ),
      delete: textInOption.filter((item) => item !== text),
    }[action];

    handleSetTextInOption(updatedTextInOption as string[]);

    if (action === ACTION.ADD) {
      setAddText("");
      addInputRef.current?.focus();
    }
    if (action === ACTION.EDIT) {
      setEditText("");
      setEditingIndex(null);
      addInputRef.current?.focus();
    }
  };

  const handleStartEditing = (index: number) => {
    setEditingIndex(index);
    setEditText(textInOption[index]);

    editInputRef.current?.focus();
  };

  const handleDeleteEditingItem = () => {
    if (editingIndex !== null) {
      handleManageTextAction(textInOption[editingIndex], "delete");
      setEditText("");
      setEditingIndex(null);
      addInputRef.current?.focus();
    }
  };

  const handleDeleteItem = (text: string) => {
    handleManageTextAction(text, "delete");
    addInputRef.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    action: ActionType
  ) => {
    if (e.key === "Enter") {
      handleManageTextAction(null, action);
    }
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedData = Array.from(textInOption);
    const [movedItem] = updatedData.splice(result.source.index, 1);
    updatedData.splice(result.destination.index, 0, movedItem);

    handleSetTextInOption(updatedData);
  };

  const handleEditText = (text: string) => {
    setEditText(text);
  };
  const handleSetAddText = (text: string) => {
    setAddText(text);
  };
  const handleCloseSnackbar = (value: boolean) => {
    setSnackbarOpen(value);
  };

  return (
    <div
      className={styles.modal__overlay}
      onClick={() => handleChangeModal(false)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ModalHeader title={TEXT_LIST} />
        <DragDropContext onDragEnd={onDragEnd}>
          <ItemList
            data={textInOption}
            editingIndex={editingIndex}
            editText={editText}
            handleEditText={handleEditText}
            handleStartEditing={handleStartEditing}
            handleText={handleManageTextAction}
            handleDeleteEditingItem={handleDeleteEditingItem}
            handleDeleteItem={handleDeleteItem}
            handleKeyDown={handleKeyDown}
            editInputRef={editInputRef}
          />
        </DragDropContext>
        <AddNewItem
          addText={addText}
          handleSetAddText={handleSetAddText}
          handleText={handleManageTextAction}
          handleKeyDown={handleKeyDown}
          addInputRef={addInputRef}
        />
      </div>
      <CommonSnackbar
        message={snackbarMessage}
        open={snackbarOpen}
        handleSetSnackbar={handleCloseSnackbar}
      />
    </div>
  );
};

export default Modal;
