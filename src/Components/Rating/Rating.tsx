import React from 'react';
import {Star} from "@material-ui/icons";



export const Rating = () => {

    const starState: number[] = [1, 2, 3, 4, 5];

    const [active, setActive] = React.useState<number>(0);

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

