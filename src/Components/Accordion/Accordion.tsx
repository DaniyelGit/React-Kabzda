import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {AccordionReducer, changeCollapsedAC} from "../../reducers/AccordionReducer";



export const Accordion = () => {

    const [collapsed, setDispatch] = React.useReducer(AccordionReducer, true)
    const onChangeCollapsed = () => setDispatch(changeCollapsedAC(!collapsed));

    return (
        <div>
            <AccordionTitle title={'Меню'} onChangeCollapsed={onChangeCollapsed}/>
            {!collapsed && <AccordionBody items={['говядина', 'свинина', 'курица']}/>}
        </div>
    );
};
