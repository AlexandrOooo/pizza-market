import React from "react";

function Search({ searchValue, setSearchValue }) {
    return (
        <div className="search">
            <img
                className="search__img"
                src="./img/searchInput.svg"
                alt="Поиск"
            />
            <input
                className="search__input"
                type="text"
                placeholder="Поиск пиццы"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <img
                className="search__close"
                src="./img/closeInput.svg"
                alt="Закрыть"
                onClick={() => setSearchValue("")}
            />
        </div>
    );
}

export default Search;
