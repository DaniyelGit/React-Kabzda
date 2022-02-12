import React from 'react';
import s from './select.module.css';


type SelectBodyPropsType = {
    names: string[]
    onChangeValue: (name: string) => void
}

export const SelectBody = (props: SelectBodyPropsType) => {

    const {
        names,
        onChangeValue,
    } = props

    const handlerChangeValue = (name: string) => {
        onChangeValue(name);
    }

    return (
        <div className={s.selectBody}>
            {
                names.map((name, index) => {
                    return (
                      <div key={`${name}_${index}`}
                           className={s.options}
                           onClick={() => handlerChangeValue(name)}
                      >
                          {name}
                      </div>
                    );
                })
            }
        </div>
    );
};

