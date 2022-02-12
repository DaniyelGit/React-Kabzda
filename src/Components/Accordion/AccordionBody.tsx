import React from 'react';


type AccordionBodyPropsType = {
    items: string[]
}

export const AccordionBody = (props: AccordionBodyPropsType) => {

    const {
        items
    } = props;

    return (
        <ul>
            {items.map((item, index) => {
                return (
                  <li key={`${index}_${item}`}>
                      {item}
                  </li>
                );
            })}
        </ul>
    );
};
