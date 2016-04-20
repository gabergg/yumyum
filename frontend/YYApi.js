const API_BASE = "/api";
const INITIAL_API_ENDPOINT = "/startup";
const AUTOCOMPETE_ENDPOINT = "/autocomplete";
const SUBMIT_RATING_ENDPOINT = "/submit_rating";

const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

function parseJSON(x) {
    return x.json();
}

function toQueryString (obj) {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

function post(url, query = {}, data = {}) {
    return fetch(`${url}?${toQueryString(query)}`, {
        method: 'post',
        headers: JSON_HEADERS,
        body: JSON.stringify(data)
    }).then(parseJSON);
}

export function fetchInitialData() {
    const url = `${API_BASE}${INITIAL_API_ENDPOINT}`;
    return post(url);
}

export function getAutocompleteSuggestions(text_entered) {
    const url = `${API_BASE}${AUTOCOMPETE_ENDPOINT}`;
    const data = {input: text_entered};
    return post(url, {}, data);
}

export function submitRating(spot, rating) {
    const url = `${API_BASE}${SUBMIT_RATING_ENDPOINT}`;
    const data = {
        spot,
        rating,
    };
    return post(url, {}, data);
}
