const SUBMIT_RATING = 'SUBMIT_RATING';
const SHOW_AUTHOR_DROPDOWN = 'SHOW_AUTHOR_DROPDOWN';
const SELECT_AUTHOR = 'SELECT_AUTHOR';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';

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

function selectAuthor({author}) {
    return {
        type: SELECT_AUTHOR,
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

const yyActionCreators = {
    submitSearch,
    showAuthorDropdown,
    selectAuthor,
    submitRating,
};

export default yyActionCreators;
