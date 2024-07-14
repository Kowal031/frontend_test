import { FC, ReactElement } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./styles/layout.module.scss";

interface LayoutProps {
  children: ReactElement;
  showName: boolean;
  handleToggleName: (showName: boolean) => void;
  handleReset: () => void;
}

const Layout: FC<LayoutProps> = ({
  children,
  showName,
  handleToggleName,
  handleReset,
}) => {
  return (
    <div className={styles.container}>
      <Header showName={showName} />
      {children}
      <Footer handleToggleName={handleToggleName} handleReset={handleReset} />
    </div>
  );
};

export default Layout;
