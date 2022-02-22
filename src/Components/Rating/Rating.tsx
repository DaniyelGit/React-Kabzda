import React from 'react';
import {Star} from "@material-ui/icons";
import {changeActiveStarAC, RatingReducer} from "../../reducers/RatingReducer";



export const Rating = () => {

    const starState: number[] = [1, 2, 3, 4, 5];

    const [active, setActive] = React.useState<number>(0);
    // const [hoveredElement, setHoveredElement] = React.useState<number>(0);
    // const [active, setDispatch] = React.useReducer(RatingReducer, 0);


    return (
        <div>
            {
                starState.map((s, i) => {
                    
                    return (
                      <Star key={i}
                            fontSize={'large'}
                            onClick={() => setActive(i + 1)}
                            className={active > i ? 'starBg' : ''}
                      />
                    );
                })
            }
        </div>
    );
};

