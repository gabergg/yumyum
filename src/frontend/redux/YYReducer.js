//import update from 'react-addons-update'; ADD THIS

import {yyActions} from './yyActions';

const initialState = {
    ratings: [],
    authors: [],
    selectedAuthor: null,
    suggestions: [],
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
                suggestions: action.payload.suggestions
            };
        case yyActions.SUGGESTION_SELECTED:
            const new_suggestions = state0.suggestions.concat(action.payload.suggestion);
            return {
                ...state0,
                suggestions: new_suggestions,
            };
        default:
            return state0;
    }
}


export default YYReducer;
