const endpoints = {
    API_BASE: "/api",
    INITIAL_API_ENDPOINT: "/startup",
    AUTOCOMPETE_ENDPOINT: "/autocomplete",
    SUBMIT_RATING_ENDPOINT: "/submit_rating",
    SPOT_ENDPOINT: "/spot",
}

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
    const url = `${endpoints.API_BASE}${endpoints.INITIAL_API_ENDPOINT}`;
    return post(url);
}

export function getAutocompleteSuggestions(text_entered) {
    const url = `${endpoints.API_BASE}${endpoints.AUTOCOMPETE_ENDPOINT}`;
    const data = {input: text_entered};
    return post(url, {}, data);
}

export function getSpotRatings(google_id) {
    const url = `${endpoints.API_BASE}${endpoints.SPOT_ENDPOINT}`;
    const data = {google_id};
    return post(url, {}, data);
}

export function submitRating(spot, rating) {
    const url = `${endpoints.API_BASE}${endpoints.SUBMIT_RATING_ENDPOINT}`;
    const data = {
        spot,
        rating,
    };
    return post(url, {}, data);
}
