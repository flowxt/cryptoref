import React, { useEffect, useState } from 'react';
import '../styles/_settings.scss';
import { Tooltip, Treemap } from 'recharts';

const colors = {
    color1: 'rgb(0, 183, 179)',
    green2: 'rgb(0, 253, 148)',
    green1: 'rgb(2, 172, 81)',
    red1: 'rgb(255, 111, 86)',
    red2: 'rgb(251, 69, 63)',
    black2: 'rgb(10, 10, 10)',
};

const GlobalChart = ({ coinsData }) => {
    const [dataArray, setDataArray] = useState([]);

    const colorPicker = (number) => {
        if (number >= 20) {
            return colors.color1;
        } else if (number >= 5) {
            return colors.green2;
        } else if (number >= 0) {
            return colors.green1;
        } else if (number >= -5) {
            return colors.red1;
        } else if (number >= -20) {
            return colors.red2;
        } else {
            return colors.black2;
        }
    };

const excludeCoin = (coin) => {
if (
    coin === 'usdt' ||
    coin === 'usdc' ||
    coin === 'busd' ||
    coin === 'dai' ||
    coin === 'ust' ||
    coin === 'mim'
) {
    return false;
} else {
    return true;
}
}

    useEffect(() => {
        let chartData = [];
        if (coinsData.length > 0) {
            for (let i = 0; i < 45; i++) {
                if (excludeCoin (coinsData[i].symbol)) {

                
                chartData.push({
                    name: coinsData[i].symbol.toUpperCase(),
                    percentage: coinsData[i].market_cap_change_percentage_24h.toFixed(1) + '%',
                    size: coinsData[i].market_cap,
                    fill: colorPicker(coinsData[i].price_change_percentage_24h),
                });
            }
        }
        }
        setDataArray(chartData);
    }, [coinsData]);

    const TreemapToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].payload.name} : ${payload[0].payload.percentage}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="global-chart">
            <Treemap
                width={730}
                height={250}
                data={dataArray}
                dataKey="size"
                stroke="rgb(51, 51, 51)"
                fill="black"
                aspectRatio={4 / 3}
            >
                <Tooltip content={<TreemapToolTip />} />
            </Treemap>
        </div>
    );
};

export default GlobalChart;