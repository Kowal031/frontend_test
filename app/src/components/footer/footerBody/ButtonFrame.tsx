import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import FOOTER_CONTENT from "../constants/constants";
import styles from "../styles/footer.module.scss";

interface ButtonFrameProps {
  handleToggleName: (showName: boolean) => void;
  handleReset: () => void;
}

const ButtonFrame: FC<ButtonFrameProps> = ({
  handleToggleName,
  handleReset,
}) => {
  const { RESET_SETTINGS, SHOW_PERSONAL_DATA } = FOOTER_CONTENT;
  return (
    <div className={styles.footer__frame}>
      <button className={styles.frame__btn} onClick={handleReset}>
        <IoIosArrowForward className={styles.frame__icon} /> {RESET_SETTINGS}
      </button>
      <button
        className={styles.frame__btn}
        onClick={() => handleToggleName(true)}
      >
        <IoIosArrowForward className={styles.frame__icon} />
        {SHOW_PERSONAL_DATA}
      </button>
    </div>
  );
};

export default ButtonFrame;
