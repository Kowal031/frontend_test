import { FC } from "react";
import { FaHtml5 } from "react-icons/fa";
import HEADER_CONTENT from "../constants/constants";
import styles from "../styles/header.module.scss";

const Logo: FC = () => {
  return (
    <a
      href="/"
      className={styles.header__logo}
      aria-label={HEADER_CONTENT.ARIA_LABEL}
    >
      <FaHtml5 className={styles["header__logo-icon"]} />
    </a>
  );
};

export default Logo;
