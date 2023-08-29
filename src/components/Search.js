import React, { useReducer } from 'react';

import { reducer, initialState } from '../reducer';

const Search = ({ fetchMovies }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { search } = state;

    const handleSearchChange = event => dispatch({
            type: 'MOVIES_SEARCH_SET',
            payload: event.target.value
        }
    );

    const handleSubmit = event => {
        event.preventDefault();
        fetchMovies(search);
        event.target.reset();
    }

    return (
        <form className="form-group d-flex gap-2" role='search' onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search movie" className="form-control"  onChange={handleSearchChange} />
            <button type="submit" className="btn btn-primary ml-2"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    );
}

export default Search;
