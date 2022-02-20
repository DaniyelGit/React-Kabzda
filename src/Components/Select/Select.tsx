import React, {KeyboardEvent} from 'react';
import s from './select.module.css';
import {SelectTitle} from "./SelectTitle";
import {SelectBody} from "./SelectBody";


export const Select = () => {
    const stateNames = [
        {id: 0, name: 'Даниель'},
        {id: 1, name: 'Виктория'},
        {id: 2, name: 'Захар'},
        {id: 3, name: 'Тереса'},
        {id: 4, name: 'Андрей'}
    ];
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const [activeItem, setActiveItem] = React.useState<number>(0)
    const [hoveredItem, setHoveredItem] = React.useState<number>(0);
    const labelSelect = stateNames[activeItem].name;

    const onChangeCollapsed = () => setCollapsed(!collapsed);

    const onChangeValue = (index: number) => {
        setActiveItem(index);
        onChangeCollapsed();
    }

    const hoveredElement = (index: number) => {
        setHoveredItem(index);
    }


    return (
        <div className={s.wrapper} >
            <SelectTitle value={labelSelect} onChangeCollapsed={onChangeCollapsed}/>
            {
                collapsed
                && <SelectBody stateNames={stateNames}
                               onChangeValue={onChangeValue}
                               hoveredItem={hoveredItem}
                               hoveredElement={hoveredElement}
                />
            }
        </div>
    );
};

