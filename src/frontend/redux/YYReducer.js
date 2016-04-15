//import update from 'react-addons-update'; ADD THIS

import {yyActions} from './yyActions';

const initialState = {
    ratings: [],
    authors: [],
    selectedAuthor: null,
    spot: "",
    suggestions: [],
    ratingBar: 2.5,
};

function YYReducer(state0 = initialState, action) {
    switch(action.type) {
        case yyActions.INITIAL_PAGE_LOAD:
            return {
                ...state0,
                authors: state0.authors.concat(action.payload.authors)
            };
        case yyActions.AUTHOR_SELECTED:
            return {
                ...state0,
                selectedAuthor: action.payload.selectedAuthor
            };
        case yyActions.RECEIVED_AUTOCOMPLETE_SUGGESTIONS:
            return {
                ...state0,
                suggestions: action.payload.suggestions,
            };
        case yyActions.SUGGESTION_SELECTED:
            return {
                ...state0,
                suggestions: [],
                spot: action.payload.suggestion,
            };
        case yyActions.UPDATE_RATING_BAR:
            console.log(action.payload.rating);
            return {
                ...state0,
                ratingBar: action.payload.rating,
            };
        default:
            return state0;
    }
}


export default YYReducer;
