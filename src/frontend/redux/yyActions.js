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
const UPDATE_FORM_AUTHOR = 'UPDATE_FORM_AUTHOR';
const UPDATE_FORM_RATING = 'UPDATE_FORM_RATING';
const UPDATE_FORM_DESCRIPTION = 'UPDATE_FORM_DESCRIPTION';
const SUBMIT_RATING_FORM = 'SUBMIT_RATING_FORM';
const SUBMIT_RATING_FORM_SUCCESS = 'SUBMIT_RATING_FORM_SUCCESS';
const SUBMIT_RATING_FORM_FAIL = 'SUBMIT_RATING_FORM_FAIL';

export const yyActions = {
    SUBMIT_RATING_FORM, INITIAL_PAGE_LOAD,
    FETCH_AUTOCOMPLETE_SUGGESTIONS, UPDATE_FORM_RATING,
    RECEIVED_AUTOCOMPLETE_SUGGESTIONS, SUGGESTION_SELECTED,
    UPDATE_RATING_BAR, UPDATE_FORM_AUTHOR,
    UPDATE_FORM_DESCRIPTION, SUBMIT_RATING_FORM_SUCCESS,
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

function updateFormAuthor({author}) {
    return {
        type: UPDATE_FORM_AUTHOR,
        payload: {
            author,
        }
    }
}

function updateFormRating({rating}) {
    return {
        type: UPDATE_FORM_RATING,
        payload: {
            rating,
        }
    }
}

function updateFormDescription({description}) {
    return {
        type: UPDATE_FORM_DESCRIPTION,
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

function submitRatingForm({form}) {
    const {
        author,
        rating,
        description,
    } = form;
    return async function (dispatch) {
        try {
            const hey = await submitRating(author, rating, description);
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
    updateFormAuthor,
    updateFormRating,
    updateFormDescription,
    fetchAutocompleteSuggestions,
    receivedAutocompleteSuggestions,
};
