import React, { InputHTMLAttributes } from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice.ts";

import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_15_152)">
          <rect width="24" height="24" fill="white" />
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke="#000000"
            strokeLinejoin="round"
          />
          <path
            d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
            fill="#000000"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_152">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
