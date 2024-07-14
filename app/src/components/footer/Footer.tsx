import { FC } from "react";
import ButtonFrame from "./footerBody/ButtonFrame";
import CompanyInfo from "./footerBody/CompanyInfo";
import TextContainer from "./footerBody/TextContainer";
import ToggleButton from "./footerBody/ToggleButton";
import styles from "./styles/footer.module.scss";

interface FooterProps {
  handleToggleName: (showName: boolean) => void;
  handleReset: () => void;
}

const Footer: FC<FooterProps> = ({ handleToggleName, handleReset }) => {
  return (
    <footer className={styles.footer}>
      <TextContainer />
      <CompanyInfo />
      <ToggleButton />
      <ButtonFrame
        handleToggleName={handleToggleName}
        handleReset={handleReset}
      />
    </footer>
  );
};

export default Footer;
