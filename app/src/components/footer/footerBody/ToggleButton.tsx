import { FC } from "react";
import { IoIosArrowUp } from "react-icons/io";
import FOOTER_CONTENT from "../constants/constants";
import styles from "../styles/footer.module.scss";

const ToggleButton: FC = () => {
  return (
    <div className={styles["footer__btn-container"]}>
      <input type="checkbox" id="toggle" className={styles.footer__toggle} />
      <label htmlFor="toggle" className={styles.footer__btn}>
        {FOOTER_CONTENT.SHOW} <IoIosArrowUp className={styles.footer__icon} />
      </label>
    </div>
  );
};

export default ToggleButton;
