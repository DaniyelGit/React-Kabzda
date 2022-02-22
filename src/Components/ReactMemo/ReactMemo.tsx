import React from 'react';


export const ReactMemo = () => {
    const [arr, setArr] = React.useState<string[]>(['Даниель', 'Виктория', 'Захар']);
    const [num, setNum] = React.useState<number>(0);

    const changeArrUsers = () => {
        setArr([...arr, 'Example']);
    }

    return (
        <div>
            <CounterContainer number={num}/>
            <UsersContainer items={arr}/>

            <button onClick={changeArrUsers}>add User</button>
            <button onClick={() => setNum(num + 1)}>+</button>
        </div>
    );
};



type UsersPropsType = {
    items: string[]
}
const Users = (props: UsersPropsType) => {
    console.log('Users');
    return (
        <div>
            {props.items.map((item, index) => {
                return (
                    <div key={index}>-{item}</div>
                );
            })}
        </div>
    );
}

const UsersContainer = React.memo(Users);


type CounterPropsType = {
    number: number
}
const Counter = (props: CounterPropsType) => {
    console.log('Counter');
    return (
        <div>
            <span className={'counter'}><b>{props.number}</b></span>
        </div>
    );
}

const CounterContainer = React.memo(Counter);