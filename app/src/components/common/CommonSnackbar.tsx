import { FC, useEffect } from "react";
import GLOBAL_CONTENT from "../../constants/constants";
import styles from "./styles/snackbar.module.scss";

interface CommonSnackbarProps {
  open: boolean;
  handleSetSnackbar: (value: boolean, message?: string) => void;
  message: string;
  type?: "error";
}

const CommonSnackbar: FC<CommonSnackbarProps> = ({
  message,
  open,
  handleSetSnackbar,
  type = GLOBAL_CONTENT.ERROR,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        handleSetSnackbar(false, "");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [handleSetSnackbar, open]);

  return (
    <div
      className={`${styles.snackbar} ${
        type === GLOBAL_CONTENT.ERROR ? styles["snackbar--error"] : ""
      } ${open ? "" : styles["snackbar--hidden"]}`}
    >
      {message}
    </div>
  );
};

export default CommonSnackbar;
