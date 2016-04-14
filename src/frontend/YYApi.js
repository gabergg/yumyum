const API_BASE = "/api"
const INITIAL_API_ENDPOINT = "/startup"

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
    }).then(parseJSON)

export function fetchInitialData() {
    url = `${API_BASE}${INITIAL_API_ENDPOINT}`
    return post(url)
}
