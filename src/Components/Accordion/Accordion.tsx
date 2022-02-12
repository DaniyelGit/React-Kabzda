import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";



export const Accordion = () => {

    const [collapsed, setCollapsed] = React.useState<boolean>(true)

    const onChangeCollapsed = () => setCollapsed(!collapsed);

    return (
        <div>
            <AccordionTitle title={'Меню'} onChangeCollapsed={onChangeCollapsed}/>
            {!collapsed && <AccordionBody items={['говядина', 'свинина', 'курица']}/>}
        </div>
    );
};
