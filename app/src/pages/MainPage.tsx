import { ChangeEvent, FC, useEffect, useState } from "react";
import CommonSnackbar from "../components/common/CommonSnackbar";
import FirstBlock from "../components/mainPage/FirstBlock";
import MainPageHeader from "../components/mainPage/MainPageHeader";
import SecondBlock from "../components/mainPage/SecondBlock";
import styles from "../components/mainPage/styles/mainPage.module.scss";
import ThirdBlock from "../components/mainPage/ThirdBlock";
import GLOBAL_CONTENT from "../constants/constants";
import data from "../data/data.json";
import useLocalStorageData from "../hooks/useLocalStorageData ";
import ModificationType from "../types/modificationTypes";

interface MainPageProps {
  handleToggleName: (showName: boolean) => void;
  reset: boolean;
}

const MainPage: FC<MainPageProps> = ({ handleToggleName, reset }) => {
  const [currentText, setCurrentText] = useState<string[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [textInOption, setTextInOption] = useLocalStorageData<string>(
    "data",
    data
  );
  const { REPLACE, APPEND, ERROR_MESSAGE } = GLOBAL_CONTENT;

  useEffect(() => {
    handleToggleName(false);
    setSelectedOption("");
    setTextInOption(textInOption);
    setCurrentText([]);
    setSnackbarOpen(false);
    localStorage.setItem("data", JSON.stringify(data));
  }, [reset]);

  const getRandomAvailableText = (
    modificationType: ModificationType
  ): string | null => {
    const SLICE_INDEX = 2;
    const availableTexts = textInOption.slice(SLICE_INDEX).filter((item) => {
      const isNotIncluded = !currentText.includes(item);
      return (
        (isNotIncluded && modificationType === APPEND) ||
        modificationType === REPLACE
      );
    });

    if (availableTexts.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * availableTexts.length);

    return availableTexts[randomIndex];
  };

  const getTextForOption = (
    option: string,
    modificationType: ModificationType
  ): string | null => {
    const optionToTextMap = {
      "1": textInOption[0],
      "2": textInOption[1],
      "3": getRandomAvailableText(modificationType),
    };

    return optionToTextMap[option as keyof typeof optionToTextMap] || null;
  };

  const handleChangeText = (modificationType: ModificationType) => {
    setSnackbarOpen(false);
    if (!selectedOption) {
      handleSetSnackbar(true, ERROR_MESSAGE.SELECT_OPTION);
      return;
    }

    const newText = getTextForOption(selectedOption, modificationType);
    if (
      !newText ||
      (modificationType === APPEND && currentText.includes(newText))
    ) {
      handleSetSnackbar(
        true,
        selectedOption === "3"
          ? ERROR_MESSAGE.NO_RANDOM_TEXT
          : ERROR_MESSAGE.OPTION_ALREADY_ADDED
      );
      return;
    }
    const updatedTexts =
      modificationType === REPLACE ? [newText] : [...currentText, newText];
    setCurrentText(updatedTexts.sort((a, b) => a.localeCompare(b)));
  };

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSetTextInOption = (texts: string[]) => {
    setTextInOption(texts);
  };

  const handleSetSnackbar = (value: boolean, message?: string) => {
    setSnackbarMessage(message ?? "");
    setSnackbarOpen(value);
  };

  return (
    <main className={styles.main__container}>
      <MainPageHeader />
      <div className={styles.block__container}>
        <FirstBlock
          handleChangeRadio={handleChangeRadio}
          selectedOption={selectedOption}
        />
        <SecondBlock
          handleChangeText={handleChangeText}
          handleSetTextInOption={handleSetTextInOption}
          textInOption={textInOption}
        />
        <ThirdBlock currentText={currentText} />
      </div>
      <CommonSnackbar
        message={snackbarMessage}
        open={snackbarOpen}
        handleSetSnackbar={handleSetSnackbar}
      />
    </main>
  );
};

export default MainPage;
