import React from 'react';


type AccordionTitlePropsType = {
    title: string
    onChangeCollapsed: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {

    const {
        title,
        onChangeCollapsed,
    } = props;

    return (
        <h4 onClick={onChangeCollapsed}>{title}</h4>
    );
};