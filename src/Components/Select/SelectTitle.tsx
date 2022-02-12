import React from 'react';
import s from './select.module.css';

type SelectTitle = {
    value: string
    onChangeCollapsed: () => void
}

export const SelectTitle = (props: SelectTitle) => {

    const {
        value,
        onChangeCollapsed
    } = props;

    return (
        <div className={s.select} onClick={onChangeCollapsed}>
            <span className={s.selectTitle}>{value}</span>
        </div>
    );
};
