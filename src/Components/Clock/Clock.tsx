import React, {useEffect, useState} from 'react';

export const Clock = () => {

    const initialDate = new Date();
    const [date, setDate] = useState(initialDate);

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)

    }, [])


    return (
        <div>
            <span>{date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()}</span>:
            <span>{date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()}</span>:
            <span>{date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()}</span>
        </div>
    );
};
