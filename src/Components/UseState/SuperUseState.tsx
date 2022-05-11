import React, {useState} from 'react';


const setNumCounter = () => {
    return 1;
}

export const SuperUseState = () => {
    const [counter, setCounter] = useState<number>(setNumCounter)

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            <div>{counter}</div>
        </div>
    );
};
