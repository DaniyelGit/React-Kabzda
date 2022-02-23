import React from 'react';




export const UseMemo = () => {


    const [a, setA] = React.useState<number>(1);
    const [b, setB] = React.useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    for (let i = 1; i <= a; i++) {
        let fake = 0;
        while (fake < 100000000) {
            fake++;
            const fakeValue = Math.random();
        }
        resultA *= i;
    }

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
