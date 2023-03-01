export const BACKEND_URL = 'http://localhost:8000/';

export const  GET_ALL_EVENTS = {
    url: 'api/events',
    method: 'GET'
};

export const GET_EVENT_DETAIL_BY_ID = (id:number | string  | undefined) => ({
    url: `api/events/${id}`,
    method: 'GET'
});

export const BOOKMARK_EVENT_BY_ID = (id:number | string | undefined) => ({
    url: `api/events/${id}`,
    method: 'PATCH'
});

export const REGISTER_EVENT_BY_ID = (id: number | string | undefined) => ({
    url: `api/events/${id}`,
    method: 'PATCH'
});

export const GET_ALL_THEMES = {
    url: 'api/themes',
    method: 'GET'
};

export const SET_THEME = {
    url: 'api/themes',
    method: 'PUT'
};