export const AccordionReducer = (state: boolean, action: TypeChangeCollapsedAC) => {
    switch (action.type) {
        case "CHANGE-COLLAPSED-ACCORDION": {
            return action.payload.bool;
        }
        default: return state;
    }
}


type TypeChangeCollapsedAC = ReturnType<typeof changeCollapsedAC>;
export const changeCollapsedAC = (bool: boolean) => {
    return {
        type: 'CHANGE-COLLAPSED-ACCORDION',
        payload: {
            bool,
        }
    }
}