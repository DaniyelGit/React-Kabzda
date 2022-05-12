import React, {useEffect, useState} from 'react';


const setStringForClock = (num: number) => {
    return num < 10 ? '0' + num : num;
}

export const Clock = () => {

    const initialDate = new Date();
    const [date, setDate] = useState(initialDate);

    useEffect(() => {
        const idInterval = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(idInterval);
        }

    }, [])


    return (
        <div>
            <span>{setStringForClock(date.getHours())}</span>:
            <span>{setStringForClock(date.getMinutes())}</span>:
            <span>{setStringForClock(date.getSeconds())}</span>
        </div>
    );
};
