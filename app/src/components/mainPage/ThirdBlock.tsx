import { FC } from "react";
import MAIN_PAGE_CONTENT from "./constants/constants";
import styles from "./styles/mainPage.module.scss";

interface ThirdBlockProps {
  currentText: string[];
}

const ThirdBlock: FC<ThirdBlockProps> = ({ currentText }) => {
  const { LONG_BLOCK_NAME, APPEND_OR_PASTE_TEXT } = MAIN_PAGE_CONTENT;
  return (
    <div className={styles.block__third}>
      <h2 className={`${styles.block__title} ${styles["block__title--long"]}`}>
        {LONG_BLOCK_NAME}
      </h2>
      <div className={styles.block__text}>
        {currentText.length ? (
          currentText.map((text, index) => <p key={index}>{text}</p>)
        ) : (
          <p>{APPEND_OR_PASTE_TEXT}</p>
        )}
      </div>
    </div>
  );
};

export default ThirdBlock;
