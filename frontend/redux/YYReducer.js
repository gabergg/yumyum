//import update from 'react-addons-update'; ADD THIS

import {yyActions} from './yyActions';

const initialState = {
    ratings: {},
    authors: [],
    selectedAuthor: "",
    spot: null,
    suggestions: [],
    ratingBar: 0,
    rating: {
        author: "",
        score: 0,
        description: "",
    },
};

function YYReducer(state0 = initialState, action) {
    // keeps receiving autocomplete suggestions after select a spot
    console.log(action.type);
    switch(action.type) {
        case yyActions.INITIAL_PAGE_LOAD:
            return {
                ...state0,
                authors: state0.authors.concat(action.payload.authors),
                rating: {
                    ...state0.rating,
                    author: action.payload.authors[0],
                },
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
        case yyActions.CLEAR_AUTOCOMPLETE_SUGGESTIONS:
            return {
                ...state0,
                suggestions: [],
            };
        case yyActions.RECEIVED_SPOT_RATINGS:
            return {
                ...state0,
                ratings: action.payload.ratings || {},
            };
        case yyActions.UPDATE_RATING_BAR:
            return {
                ...state0,
                ratingBar: action.payload.score,
            };
        case yyActions.UPDATE_RATING_AUTHOR:
            return {
                ...state0,
                rating: {
                    ...state0.rating,
                    author: action.payload.author,
                },
            };
        case yyActions.UPDATE_RATING_SCORE:
            return {
                ...state0,
                rating: {
                    ...state0.rating,
                    score: action.payload.score,
                },
            };
        case yyActions.UPDATE_RATING_DESCRIPTION:
            return {
                ...state0,
                rating: {
                    ...state0.rating,
                    description: action.payload.description,
                },
            };
        case yyActions.SUBMIT_RATING_FORM_SUCCESS:
            return {
                ...state0,
                suggestions: [],
                spot: null,
            };
        case yyActions.SUBMIT_RATING_FORM_FAIL:
            return {
                ...state0,
            };
        default:
            return state0;
    }
}


export default YYReducer;
