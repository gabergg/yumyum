const initialState = {
    ratings: [],
    authors: [],
}

function YYReducer(state0 = initialState, action) {
    switch(action.type) {
        case 'INITIAL_PAGE_LOAD':
            return {
                ...state0,
                authors: state0.authors.concat(action.payload.authors)
            };
        default:
            return state0;
    }
}


export default YYReducer;
