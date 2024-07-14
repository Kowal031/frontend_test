import { FC } from "react";
import styles from "./styles/modal.module.scss";

interface ModalHeaderProps {
  title: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ title }) => (
  <h2 className={styles.modal__title}>{title}</h2>
);

export default ModalHeader;
