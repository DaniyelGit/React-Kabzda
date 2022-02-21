

export const RatingReducer = (state: number, action: RatingActionType) => {
    switch (action.type) {
        case 'SET-ACTIVE-STAR': {
            return action.num + 1;
        }
        default: return state
    }
}


type changeActiveStarACType = ReturnType<typeof changeActiveStarAC>;

export const changeActiveStarAC = (num: number) => {
    return {
        type: 'SET-ACTIVE-STAR',
        num,
    } as const
}

type RatingActionType = changeActiveStarACType;