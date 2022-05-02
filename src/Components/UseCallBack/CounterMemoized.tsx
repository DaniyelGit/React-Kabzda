import React from 'react';

type CounterMemoizedType = {
    changeCount: () => void
    counter: number
}

export const CounterMemoized = React.memo((props: CounterMemoizedType) => {
        console.log('CounterMemoized');

        return (
            <div>
                <button onClick={props.changeCount}>count</button>
                <span>{props.counter}</span>
            </div>
        );
    }
)
