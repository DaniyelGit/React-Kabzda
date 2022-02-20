import React from 'react';
import {Star, StarBorder} from "@material-ui/icons";



export const Rating = () => {

    const [activeStar, setActiveStar] = React.useState<number>(0);

    const onClickHandler = (num: number) => {
        activeStar === num
            ? setActiveStar(num - 1)
            : setActiveStar(num);
    }

    return (
        <div>
            <Star fontSize="large"
                  onClick={() => onClickHandler(1)}
                  className={activeStar > 0 ? 'star' : ''}
            />
            <Star fontSize="large"
                  onClick={() => onClickHandler(2)}
                  className={activeStar > 1 ? 'star' : ''}
            />
            <Star fontSize="large"
                  onClick={() => onClickHandler(3)}
                  className={activeStar > 2 ? 'star' : ''}
            />
            <Star fontSize="large"
                  onClick={() => onClickHandler(4)}
                  className={activeStar > 3 ? 'star' : ''}
            />
            <Star fontSize="large"
                  onClick={() => onClickHandler(5)}
                  className={activeStar > 4 ? 'star' : ''}
            />
        </div>
    );
};

