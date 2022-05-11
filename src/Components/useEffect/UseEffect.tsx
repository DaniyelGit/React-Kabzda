import React, {useEffect, useState} from "react";

export const UseEffect = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    console.log('useEffect did mount')

    useEffect(() => {
        console.log('useEffect')

        document.title = counter.toString();

        /*
        ----Side effects которые можно делать в useEffect
        - запрос на сервер
        - setInterval
        - setTimeout
        - работа с базой данных
        - обращение напрямую к DOM дереву (document.getElementById)
        - измененять напрямую элементу в DOM
        и другие....
        */
    }, [counter])


    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            <div>{`Счетчик - ${counter}`}</div>

            <button onClick={() => setFake(state => state + 1)}>+</button>
            <div>{`Фейк - ${fake}`}</div>
        </div>
    );
};
