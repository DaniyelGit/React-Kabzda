import React, {ChangeEvent} from 'react';



export const UnControlledInput = () => {
    return (
        <input type="text"/>
    );
};


export const ControlledInput = () => {
    return (
        <input type="text" value={'it-incubator.by'}/>
    );
};


export const TrackValueOfUnControlledInput = () => {

    const [value, setValue] = React.useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <>
            <input className={'trackInput'} type="text" value={value} onChange={changeHandler}/>
            <span>---</span> {value}
        </>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const clickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }


    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={clickHandler}>push</button> {value}
        </>
    );
};