import MAIN_PAGE_CONTENT from "./constants/constants";
import styles from "./styles/mainPage.module.scss";

const MainPageHeader = () => {
  return (
    <>
      <h1 className={styles.main__title}>
        {MAIN_PAGE_CONTENT.MAIN_PAGE_HEADING}
      </h1>
      <div className={styles.main__divider} />
    </>
  );
};

export default MainPageHeader;
