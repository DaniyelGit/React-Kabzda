import React from 'react';
import s from './select.module.css';


type SelectBodyPropsType = {
    stateNames: {id: string, name: string}[]
    onChangeValue: (index: number) => void
    activeItem: number
}

export const SelectBody = (props: SelectBodyPropsType) => {

    const {
        stateNames,
        onChangeValue,
        activeItem,
    } = props

    const handlerChangeValue = (index: number) => {
        onChangeValue(index);
    }

    return (
        <div className={s.selectBody}>
            {
                stateNames.map((item, index) => {
                    return (
                      <div key={`${item.id}`}
                           className={`${s.options} ${activeItem === index ? s.activeItem : ''}`}
                           onClick={() => handlerChangeValue(index)}
                      >
                          {item.name}
                      </div>
                    );
                })
            }
        </div>
    );
};

