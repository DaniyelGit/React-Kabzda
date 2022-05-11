import React, {ChangeEvent} from 'react';



export const UnControlledInput = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    );
};


export const ControlledInput = () => {
    return (
        <div>
            <input type="text" value={'it-incubator.by'}/>
        </div>
    );
};


export const TrackValueOfUnControlledInput = () => {

    const [value, setValue] = React.useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            <input className={'trackInput'} type="text" value={value} onChange={changeHandler}/>
            <span>---</span> {value}
        </div>
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
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={clickHandler}>push</button> {value}
        </div>
    );
};