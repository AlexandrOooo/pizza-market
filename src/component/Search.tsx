import React, { useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../redux/slice/filterSlice";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickClear = () => {
        dispatch(setSearchValue(""));
        setValueInput("");
        inputRef.current?.focus();
    };

    const debounceSearch = useCallback(
        debounce((value: string) => dispatch(setSearchValue(value)), 1000),
        []
    );

    const onChangeSearch = (value: string) => {
        debounceSearch(value);
        setValueInput(value);
    };

    return (
        <div className="search">
            <img
                className="search__img"
                src="./img/searchInput.svg"
                alt="Поиск"
            />
            <input
                ref={inputRef}
                className="search__input"
                type="text"
                placeholder="Поиск пиццы"
                value={valueInput}
                onChange={(e) => onChangeSearch(e.target.value)}
            />
            <img
                className="search__close"
                src="./img/closeInput.svg"
                alt="Закрыть"
                onClick={onClickClear}
            />
        </div>
    );
};

export default Search;
