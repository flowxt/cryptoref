import React, { useState } from 'react';

const Table = ({ coinsData }) => {
    const [rangeNumber, setRangeNumber] = useState(100);
    const [orderBy, setOrderBy] = useState("");

    const tableHeader = ["prix", "MarketCap", "Volume", "1h", "1j", "1m", "6m", "1a", "ATH"];

    return (
        <div className="table-container">
            <div className="table-header">
                <div className="range-container">
                    <span>Top
                        <input type="text" id="rangeNumberInput" name="rangeNumberInput" value={rangeNumber}
                            onChange={(e) => setRangeNumber(e.target.value)} />
                    </span>
                    <input type='range' id="rangeNumberRange" name="rangeNumberRange" min='1' max="250" value={rangeNumber}
                        onChange={(e) => setRangeNumber(e.target.value)} />
                        
                </div>
                
                    {tableHeader.map((el) => (
                        <li key={el}>
                            <input type='radio' name='header-el' id={el} defaultChecked={el === orderBy || el === orderBy + "reverse"} 
                            onClick={() => {setOrderBy(el);
                            }} 
                            />
                            <label htmlFor={el}>{el}</label>
                        </li>
                    ))}
                
            </div>
        </div>
    );
};

export default Table;