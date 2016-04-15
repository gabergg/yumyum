import {getAutocompleteSuggestions} from '../YYApi';

const SUBMIT_RATING = 'SUBMIT_RATING';
const SHOW_AUTHOR_DROPDOWN = 'SHOW_AUTHOR_DROPDOWN';
const AUTHOR_SELECTED = 'AUTHOR_SELECTED';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
const INITIAL_PAGE_LOAD = 'INITIAL_PAGE_LOAD';
const RECEIVED_AUTOCOMPLETE_SUGGESTIONS = 'RECEIVED_AUTOCOMPLETE_SUGGESTIONS';
const FETCH_AUTOCOMPLETE_SUGGESTIONS = 'FETCH_AUTOCOMPLETE_SUGGESTIONS';
const AUTOCOMPLETE_FETCH_FAILED = 'AUTOCOMPLETE_FETCH_FAILED';
const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';

export const yyActions = {
    SUBMIT_RATING, SHOW_AUTHOR_DROPDOWN, AUTHOR_SELECTED,
    SUBMIT_SEARCH, RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
    INITIAL_PAGE_LOAD, FETCH_AUTOCOMPLETE_SUGGESTIONS,
    SUGGESTION_SELECTED,
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

function showAuthorDropdown({authors}) {
    return {
        type: SHOW_AUTHOR_DROPDOWN,
        payload: {
            authors,
        },
    }
}

function authorSelected({author}) {
    return {
        type: AUTHOR_SELECTED,
        payload: {
            author,
        },
    }
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

function fetchAutocompleteSuggestions({input}) {
    return {
        type: RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
        payload: {
            suggestions: ["boo", "skoo", "doo", "tee", "too"],
        },
    };

    return async function (dispatch) {
        try {
            const suggestions = await getAutocompleteSuggestions(input);
            dispatch({
                type: RECEIVED_AUTOCOMPLETE_SUGGESTIONS,
                payload: {
                    suggestions,
                },
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
    showAuthorDropdown,
    authorSelected,
    submitRating,
    suggestionSelected,
    fetchAutocompleteSuggestions,
    receivedAutocompleteSuggestions,
};
