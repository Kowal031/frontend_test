import { FC, useState } from "react";
import ModificationType from "../../types/modificationTypes";
import MAIN_PAGE_CONTENT from "./constants/constants";
import Modal from "./modal/Modal";
import styles from "./styles/mainPage.module.scss";

interface SecondBlockProps {
  handleChangeText: (modificationType: ModificationType) => void;
  handleSetTextInOption: (texts: string[]) => void;
  textInOption: string[];
}

const SecondBlock: FC<SecondBlockProps> = ({
  handleChangeText,
  handleSetTextInOption,
  textInOption,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChangeModal = (value: boolean) => setIsModalOpen(value);

  const { SECOND_BLOCK, REPLACE, PASTE, CHANGE_TEXT_IN_OPTION } =
    MAIN_PAGE_CONTENT;

  return (
    <div className={styles.block__second}>
      <h2 className={styles.block__title}>{SECOND_BLOCK}</h2>
      <div className={styles["block__btn-container"]}>
        <button
          className={styles.block__btn}
          onClick={() => handleChangeText("replace")}
        >
          {REPLACE}
        </button>
        <button
          className={styles.block__btn}
          onClick={() => handleChangeText("append")}
        >
          {PASTE}
        </button>
      </div>
      <button
        className={`${styles.block__btn} ${styles["block__btn--modal"]}`}
        onClick={() => handleChangeModal(true)}
      >
        {CHANGE_TEXT_IN_OPTION}
      </button>
      {isModalOpen && (
        <Modal
          handleChangeModal={handleChangeModal}
          textInOption={textInOption}
          handleSetTextInOption={handleSetTextInOption}
        />
      )}
    </div>
  );
};

export default SecondBlock;
