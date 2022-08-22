
import { API_URI, TOKEN_COOKIE } from './constants';
import SSRStorage from './storage';


export const isUnset = o => typeof o === 'undefined' || o === null;

export function encodeValue(val) {
    if (typeof val === 'string') {
        return val;
    }

    return JSON.stringify(val);
}

export function decodeValue(val) {
    if (typeof val === 'string') {
        try {
            return JSON.parse(val);
        } catch (_) { }
    }

    return val;
}
export const defaultHeaders = {
    Accept: 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Content-Type': 'application/json',
};


const headers = token => {
    if (token) {
        const jwt = `Bearer ${token}`;
        return { ...defaultHeaders, Authorization: jwt };
    } else {
        return defaultHeaders;
    }
};
const checkStatus = async response => {
    if (!response.ok) {
        if (response.statusText === 'Unauthorized') {
            // prettier-ignore
            (new SSRStorage()).removeItem(TOKEN_COOKIE);
            window.location.reload(true);
        }
        
        const message = await response.text();
        const err = JSON.parse(message);
        throw Object.freeze({ message: err.message || err.error });
    }

    return response;
};

const parseJSON = response => response.json();

export const request = async (url, method, authed = false, data) => {
    // prettier-ignore
    const token = await (new SSRStorage()).getItem(TOKEN_COOKIE);
    const response = await fetch(`${API_URI}/${url}`, {
        method: method,
        headers: authed ? headers(token) : { ...defaultHeaders },
        body: JSON.stringify(data),
    });
    const result = await checkStatus(response);
    return parseJSON(result);
};