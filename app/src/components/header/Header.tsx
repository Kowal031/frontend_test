import { FC } from "react";
import HeaderInfo from "./headerBody/HeaderInfo";
import Logo from "./headerBody/Logo";
import styles from "./styles/header.module.scss";

interface HeaderProps {
  showName: boolean;
}

const Header: FC<HeaderProps> = ({ showName }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderInfo showName={showName} />
    </header>
  );
};

export default Header;
