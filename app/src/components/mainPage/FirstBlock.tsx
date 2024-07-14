import { ChangeEvent, FC } from "react";
import MAIN_PAGE_CONTENT from "./constants/constants";
import radioStyles from "./styles/firstBlock.module.scss";
import styles from "./styles/mainPage.module.scss";

interface FirstBlockProps {
  handleChangeRadio: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

const FirstBlock: FC<FirstBlockProps> = ({
  handleChangeRadio,
  selectedOption,
}) => {
  const { FIRST_OPTION, SECOND_OPTION, THIRD_OPTION, FIRST_BLOCK } =
    MAIN_PAGE_CONTENT;
  const options = [FIRST_OPTION, SECOND_OPTION, THIRD_OPTION];

  return (
    <div className={styles.block__first}>
      <h2 className={styles.block__title}>{FIRST_BLOCK}</h2>
      <div className={radioStyles.radio}>
        {options.map((label, index) => (
          <div className={radioStyles.radio__item} key={index}>
            <input
              type="radio"
              id={`${index + 1}`}
              name="options"
              value={index + 1}
              className={radioStyles.radio__input}
              onChange={handleChangeRadio}
              checked={selectedOption === `${index + 1}`}
              aria-labelledby={`${index + 1}label`}
            />
            <label
              htmlFor={`${index + 1}`}
              id={`${index + 1}label`}
              className={radioStyles.radio__label}
            >
              <span className={radioStyles.radio__custom} />
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBlock;
