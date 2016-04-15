import 'babel-polyfill';

import {getAutocompleteSuggestions} from '../YYApi';

const SUBMIT_RATING = 'SUBMIT_RATING';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
const INITIAL_PAGE_LOAD = 'INITIAL_PAGE_LOAD';
const RECEIVED_AUTOCOMPLETE_SUGGESTIONS = 'RECEIVED_AUTOCOMPLETE_SUGGESTIONS';
const FETCH_AUTOCOMPLETE_SUGGESTIONS = 'FETCH_AUTOCOMPLETE_SUGGESTIONS';
const AUTOCOMPLETE_FETCH_FAILED = 'AUTOCOMPLETE_FETCH_FAILED';
const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';
const UPDATE_RATING_BAR = 'UPDATE_RATING_BAR';

export const yyActions = {
    SUBMIT_RATING, SUBMIT_SEARCH,
    INITIAL_PAGE_LOAD, FETCH_AUTOCOMPLETE_SUGGESTIONS,
    RECEIVED_AUTOCOMPLETE_SUGGESTIONS, SUGGESTION_SELECTED,
    UPDATE_RATING_BAR,
};

function submitRating({author, rating, description}) {
    return {
        type: SUBMIT_RATING,
        payload: {
            author,
            rating,
            description,
        },
    };
}

function submitSearch({venue}) {
    return {
        type: SUBMIT_SEARCH,
        payload: {
            venue,
        },
    }
}

function suggestionSelected({suggestion}) {
    return {
        type: SUGGESTION_SELECTED,
        payload: {
            suggestion,
        },
    };
}

function updateRatingBar({rating}) {
    console.log(rating);
    return {
        type: UPDATE_RATING_BAR,
        payload: {
            rating,
        },
    };
}

function fetchAutocompleteSuggestions({input}) {
    return async function (dispatch) {
        try {
            const suggestions = await getAutocompleteSuggestions(input);
            dispatch({
                type: RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
                payload: suggestions,
            });

        } catch (e) {
            dispatch({
                type: AUTOCOMPLETE_FETCH_FAILED,
            });
        }
    }
}

function receivedAutocompleteSuggestions({suggestions}) {
    return {
        type: RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
        payload: {
            suggestions,
        },
    };
}

export const yyActionCreators = {
    submitSearch,
    submitRating,
    suggestionSelected,
    updateRatingBar,
    fetchAutocompleteSuggestions,
    receivedAutocompleteSuggestions,
};
