import { FC } from "react";
import HEADER_CONTENT from "../constants/constants";
import styles from "../styles/header.module.scss";

interface HeaderInfoProps {
  showName: boolean;
}

const HeaderInfo: FC<HeaderInfoProps> = ({ showName }) => {
  const { TITLE, SUBTITLE, AUTHOR } = HEADER_CONTENT;

  return (
    <div className={styles["header__info-container"]}>
      <h2 className={styles["header__info-title"]}>
        {TITLE}
        <span className={styles["header__info-title--bold"]}>{SUBTITLE}</span>
      </h2>
      {showName && (
        <h3 className={styles["header__info-personal"]}>{AUTHOR}</h3>
      )}
    </div>
  );
};

export default HeaderInfo;
