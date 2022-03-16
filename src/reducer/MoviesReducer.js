import React from 'react';

export const ContextReducer = React.createContext();

export const InitialState = {
    genres: {
        name: 'action',
        id: 1,
        title: 'Ação',
    },
    movie: {
            Title: '',
            Poster: '',
            RunTime: '',
            Genre_id: 0,
            Ratings: '',
    } 
};

export const MoviesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TYPEMOVIE':
            return{ ...state, genres: action.payload }
            default:
                return state;
            }
}