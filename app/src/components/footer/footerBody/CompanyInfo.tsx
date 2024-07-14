import { FC } from "react";
import FOOTER_CONTENT from "../constants/constants";
import styles from "../styles/footer.module.scss";

const CompanyInfo: FC = () => {
  return (
    <div className={styles.company__container}>
      <div className={styles.company__divider} />
      <p className={styles.company__text}>{FOOTER_CONTENT.COMPANY_NAME}</p>
      <div className={styles.company__divider} />
    </div>
  );
};

export default CompanyInfo;
