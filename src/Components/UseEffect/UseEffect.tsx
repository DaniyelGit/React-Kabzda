import React, {useEffect, useState} from "react";

export const UseEffect = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    console.log('UseEffect did mount')

    /*useEffect(() => {
        console.log('useEffect')

        document.title = counter.toString();

        /!*
        ----Side effects которые можно делать в UseEffect
        - запрос на сервер
        - setInterval
        - setTimeout
        - работа с базой данных
        - обращение напрямую к DOM дереву (document.getElementById)
        - измененять напрямую элементу в DOM
        и другие....
        *!/
    }, [counter])*/

    useEffect(() => {

        /*setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000)*/

        // setInterval(() => {
        //     console.log('tick');
        //     setCounter(state => state + 1);
        // }, 1000)

    }, [])




    return (
        <div>
            {/*<button onClick={() => setCounter(state => state + 1)}>+</button>
            <div>{`Счетчик - ${counter}`}</div>

            <button onClick={() => setFake(state => state + 1)}>+</button>
            <div>{`Фейк - ${fake}`}</div>*/}

            <span>{`Привет таймер ${counter}`}</span>
        </div>
    );
};
