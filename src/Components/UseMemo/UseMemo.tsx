import React, {useMemo} from 'react';


export const UseMemo = () => {
    const [a, setA] = React.useState<number>(0);
    const [b, setB] = React.useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }


    return (
        <div>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
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

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [users, setUsers] = React.useState<string[]>(['Даниель', 'Виктория', 'Захар', 'Евгений', 'Алексей']);
    const [counter, setCounter] = React.useState<number>(0);

    const newArray = useMemo(() => {
        return users.filter(name => name.toLowerCase().indexOf('а') > -1);
    }, [users])


    const addExampleInArr = () => {
        setUsers([...users, 'Игорь']);
    }

    // const newArray = users.filter(name => name.toLowerCase().indexOf('a') > -1);

    return (
        <div className={'marginTop'}>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <div>
                <button onClick={addExampleInArr}>add user</button>
                <UsersContainer items={newArray}/>
            </div>
        </div>
    );
};