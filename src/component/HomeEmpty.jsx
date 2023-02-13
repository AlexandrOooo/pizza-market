import React from "react";

function HomeEmpty() {
    return (
        <div className="content">
            <div className="container">
                <div className="content__home-empty">
                    <h2>
                        Упс, произошла ошибка<icon>😕</icon>
                    </h2>
                    <p>
                        К сожалению, произошла ошибка загрузки пиц. Попробуйте
                        позже.
                    </p>
                    <img src="/img/empty-cart.png" alt="Empty cart" />
                </div>
            </div>
        </div>
    );
}

export default HomeEmpty;
