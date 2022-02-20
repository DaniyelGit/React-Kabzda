import React, {KeyboardEvent} from 'react';
import s from './select.module.css';


type SelectBodyPropsType = {
    stateNames: {id: number, name: string}[]
    onChangeValue: (index: number) => void
    hoveredElement: (index: number) => void
    hoveredItem: number
}

export const SelectBody = (props: SelectBodyPropsType) => {

    const {
        stateNames,
        onChangeValue,
        hoveredElement,
        hoveredItem,
    } = props

    const handlerChangeValue = (index: number) => {
        onChangeValue(index);
    }

    const handlerHoveredElement = (index: number) => {
        hoveredElement(index);
    }



    return (
        <div className={s.selectBody} tabIndex={0}>
            {
                stateNames.map((item, index) => {
                    return (
                      <div key={`${item.id}`}
                           className={`${s.options} ${hoveredItem === index ? s.activeItem : ''}`}
                           onClick={() => handlerChangeValue(index)}
                           onMouseEnter={() => handlerHoveredElement(index)}
                      >
                          {item.name}
                      </div>
                    );
                })
            }
        </div>
    );
};

