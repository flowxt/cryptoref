import React from 'react';

const TableLine = ({ coin, index }) => {

    const priceFormater = (num) => {
        if (Math.round(num).toString().length < 4) {
            return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 7
            }).format(num);
        } else {
            return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(num);
        }
    };

    return (
        <div className="table-line">
            <div className="infos-container">
                <span>⭐️</span>
                <p>{index + 1}</p>
                <div className="img">
                    <img src={coin.image} height="20px" alt="logo" />
                </div>
                <div className="infos">
                    <div className="chart-img">
                        <img src="./assets/chart-icon.svg" alt="chart-icon" />
                    </div>
                    <h4>{coin.name}</h4>
                    <span>- {coin.symbol.toUpperCase()}</span>
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.name.toLowerCase().replace(/ /g, "-")}>
                        <img src="./assets/info-icon.svg" alt="info-icon" />
                    </a>
                </div>
            </div>
            <p>
                {priceFormater(coin.current_price)} $
            </p>
        </div>
    );
};

export default TableLine;