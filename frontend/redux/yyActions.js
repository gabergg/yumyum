import 'babel-polyfill';

import {
    getAutocompleteSuggestions,
    submitRating,
} from '../YYApi';

const INITIAL_PAGE_LOAD = 'INITIAL_PAGE_LOAD';
const RECEIVED_AUTOCOMPLETE_SUGGESTIONS = 'RECEIVED_AUTOCOMPLETE_SUGGESTIONS';
const FETCH_AUTOCOMPLETE_SUGGESTIONS = 'FETCH_AUTOCOMPLETE_SUGGESTIONS';
const AUTOCOMPLETE_FETCH_FAILED = 'AUTOCOMPLETE_FETCH_FAILED';
const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';
const UPDATE_RATING_BAR = 'UPDATE_RATING_BAR';
const UPDATE_RATING_AUTHOR = 'UPDATE_RATING_AUTHOR';
const UPDATE_RATING_SCORE = 'UPDATE_RATING_SCORE';
const UPDATE_RATING_DESCRIPTION = 'UPDATE_RATING_DESCRIPTION';
const SUBMIT_RATING_FORM = 'SUBMIT_RATING_FORM';
const SUBMIT_RATING_FORM_SUCCESS = 'SUBMIT_RATING_FORM_SUCCESS';
const SUBMIT_RATING_FORM_FAIL = 'SUBMIT_RATING_FORM_FAIL';

export const yyActions = {
    SUBMIT_RATING_FORM, INITIAL_PAGE_LOAD,
    FETCH_AUTOCOMPLETE_SUGGESTIONS, UPDATE_RATING_SCORE,
    RECEIVED_AUTOCOMPLETE_SUGGESTIONS, SUGGESTION_SELECTED,
    UPDATE_RATING_BAR, UPDATE_RATING_AUTHOR,
    UPDATE_RATING_DESCRIPTION, SUBMIT_RATING_FORM_SUCCESS,
    SUBMIT_RATING_FORM_FAIL,
};

function suggestionSelected({suggestion}) {
    return {
        type: SUGGESTION_SELECTED,
        payload: {
            suggestion,
        },
    };
}

function updateRatingAuthor({author}) {
    return {
        type: UPDATE_RATING_AUTHOR,
        payload: {
            author,
        }
    }
}

function updateRatingScore({rating}) {
    return {
        type: UPDATE_RATING_SCORE,
        payload: {
            rating,
        }
    }
}

function updateRatingDescription({description}) {
    return {
        type: UPDATE_RATING_DESCRIPTION,
        payload: {
            description,
        }
    }
}

function updateRatingBar({rating}) {
    return {
        type: UPDATE_RATING_BAR,
        payload: {
            rating,
        },
    };
}

function submitRatingForm({spot, rating}) {
    return async function (dispatch) {
        try {
            const hey = await submitRating(spot, rating);
            dispatch({
                type: SUBMIT_RATING_FORM_SUCCESS,
            });

        } catch (e) {
            dispatch({
                type: SUBMIT_RATING_FORM_FAIL,
            });
        }
    }
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
    submitRatingForm,
    suggestionSelected,
    updateRatingBar,
    updateRatingAuthor,
    updateRatingScore,
    updateRatingDescription,
    fetchAutocompleteSuggestions,
    receivedAutocompleteSuggestions,
};
