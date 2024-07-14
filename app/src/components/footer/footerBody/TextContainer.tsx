import { FC } from "react";
import FOOTER_CONTENT from "../constants/constants";
import styles from "../styles/footer.module.scss";

const TextContainer: FC = () => {
  const { CSS_AWESOME, IS_AWESOME, AWESOME } = FOOTER_CONTENT;
  return (
    <div className={styles.text_box__container}>
      <h2 className={styles["text_box__text-container"]}>
        <span className={styles.text_box__text}>{CSS_AWESOME}</span>
        <span className={styles.text_box__text}>{IS_AWESOME}</span>
        <span className={styles.text_box__text}>{AWESOME}</span>
      </h2>
    </div>
  );
};

export default TextContainer;
