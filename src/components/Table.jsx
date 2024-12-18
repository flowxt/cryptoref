import React, { useState } from 'react';
import TableLine from './TableLine';

const Table = ({ coinsData }) => {
    const [rangeNumber, setRangeNumber] = useState(100);
    const [orderBy, setOrderBy] = useState("");

    const tableHeader = ["Prix", "MarketCap", "Volume", "1h", "1j", "1m", "6m", "1a", "ATH"];

    return (
        <div className="table-container">
            <ul className="table-header">
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
                            onClick={() => {
                                if (orderBy === el) {
                                    setOrderBy(el + "reverse");
                                } else {
                                    setOrderBy(el);
                                }
                                
                            }} 
                            />
                            <label htmlFor={el}>{el}</label>
                        </li>
                    ))}
                
            </ul>
            {coinsData && 
            coinsData.slice(0, rangeNumber).map((coin, index) => <TableLine key={coin.id} coin={coin} index={index}/>
            )}
            
        </div>
    );
};

export default Table;