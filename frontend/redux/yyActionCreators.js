import 'babel-polyfill';

import {yyActions} from './yyActions';
import {
    getAutocompleteSuggestions,
    getSpotRatings,
    submitRating,
} from '../YYApi';

function suggestionSelected({suggestion}) {
    return {
        type: yyActions.SUGGESTION_SELECTED,
        payload: {
            suggestion,
        },
    };
}

function fetchSpotRatings({suggestion}) {
    return async function (dispatch) {
        try {
            const ratings = await getSpotRatings(suggestion.google_id);
            dispatch({
                type: yyActions.RECEIVED_SPOT_RATINGS,
                payload: {
                    ratings,
                }
            });

        } catch (e) {
            dispatch({
                type: yyActions.RECEIVED_SPOT_RATINGS,
            });
        }
    }
}

function updateRatingAuthor({author}) {
    return {
        type: yyActions.UPDATE_RATING_AUTHOR,
        payload: {
            author,
        }
    }
}

function updateRatingScore({score}) {
    return {
        type: yyActions.UPDATE_RATING_SCORE,
        payload: {
            score,
        }
    }
}

function updateRatingDescription({description}) {
    return {
        type: yyActions.UPDATE_RATING_DESCRIPTION,
        payload: {
            description,
        }
    }
}

function updateRatingBar({score}) {
    return {
        type: yyActions.UPDATE_RATING_BAR,
        payload: {
            score,
        },
    };
}

function submitRatingForm({spot, rating}) {
    return async function (dispatch) {
        try {
            await submitRating(spot, rating);
            dispatch({
                type: yyActions.SUBMIT_RATING_FORM_SUCCESS,
            });

        } catch (e) {
            dispatch({
                type: yyActions.SUBMIT_RATING_FORM_FAIL,
            });
        }
    }
}

function fetchAutocompleteSuggestions({input}) {
    return async function (dispatch) {
        try {
            const suggestions = await getAutocompleteSuggestions(input);
            dispatch({
                type: yyActions.RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
                payload: suggestions,
            });

        } catch (e) {
            dispatch({
                type: yyActions.AUTOCOMPLETE_FETCH_FAILED,
            });
        }
    }
}

function receivedAutocompleteSuggestions({suggestions}) {
    return {
        type: yyActions.RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
        payload: {
            suggestions,
        },
    };
}

export const yyActionCreators = {
    submitRatingForm,
    suggestionSelected,
    fetchSpotRatings,
    updateRatingBar,
    updateRatingAuthor,
    updateRatingScore,
    updateRatingDescription,
    fetchAutocompleteSuggestions,
    receivedAutocompleteSuggestions,
};
