import React from 'react';
import s from './select.module.css';
import {SelectTitle} from "./SelectTitle";
import {SelectBody} from "./SelectBody";




export const Select = () => {


    const names = ['Даниель', 'Виктория', 'Захар', 'Тереса', 'Андрей'];
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('Имена')

    const onChangeCollapsed = () => setCollapsed(!collapsed);

    const onChangeValue = (name: string) => {
        setValue(name);
        setCollapsed(false);
    }




    return (
        <div className={s.wrapper}>
            <SelectTitle value={value} onChangeCollapsed={onChangeCollapsed}/>
            {collapsed && <SelectBody names={names} onChangeValue={onChangeValue}/>}
        </div>
    );
};

