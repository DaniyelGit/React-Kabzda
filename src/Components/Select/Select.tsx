import React from 'react';
import s from './select.module.css';
import {SelectTitle} from "./SelectTitle";
import {SelectBody} from "./SelectBody";


export const Select = () => {
    const stateNames = [
        {id: '1', name: 'Даниель'},
        {id: '2', name: 'Виктория'},
        {id: '3', name: 'Захар'},
        {id: '4', name: 'Тереса'},
        {id: '5', name: 'Андрей'}
    ];
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const [activeItem, setActiveItem] = React.useState<number>(0)
    const labelSelect = stateNames[activeItem].name;

    const onChangeCollapsed = () => setCollapsed(!collapsed);

    const onChangeValue = (index: number) => {
        setActiveItem(index);
        setCollapsed(false);
    }


    return (
        <div className={s.wrapper}>
            <SelectTitle value={labelSelect} onChangeCollapsed={onChangeCollapsed}/>
            {
                collapsed
                && <SelectBody stateNames={stateNames}
                               onChangeValue={onChangeValue}
                               activeItem={activeItem}
                />
            }
        </div>
    );
};

