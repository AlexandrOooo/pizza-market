import React, { useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";

function Search({ searchValue, setSearchValue }) {
    const [valueInput, setValueInput] = useState("");
    const inputRef = useRef();
    const onClickClear = () => {
        setSearchValue("");
        setValueInput("");
        inputRef.current.focus();
    };

    const debounceSearch = useCallback(
        debounce((value) => setSearchValue(value), 1000),
        []
    );

    const onChangeSearch = (value) => {
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
}

export default Search;
