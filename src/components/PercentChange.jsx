import React, { useEffect, useState } from 'react';
import '../styles/_settings.scss';

const PercentChange = ({ percent }) => {
    const [colorClass, setColorClass] = useState('');

    useEffect(() => {
        if (percent) {
            if (percent >= 0) {
                setColorClass('green1');
            } else {
                setColorClass('red1');
            }
        } else {
            setColorClass('white1');
        }
    }, [percent]);

    return (
        <p className={`percent-change-container ${colorClass}`}>
            {percent ? percent.toFixed(1) + "%" : "-"}
        </p>
    );
};

export default PercentChange;