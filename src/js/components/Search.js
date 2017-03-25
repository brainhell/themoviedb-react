import React from 'react';
import css from '../../css/material-icons.pcss';

const Search = (props) => <i className="material-icons search" onClick={props.toggleSearchBox.bind(this)}>search</i>

export default Search