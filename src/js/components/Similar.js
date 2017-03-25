import React from 'react';
import MovieList from './MovieList';

const Similar = (props) => {
  const NumResults = 4;
  props.data.results = props.data.results.slice(0, NumResults);

  return (
    <div className="section section__light">
      <div className="container">
        <h2 className="section--title">You might also like</h2>
        <div className="similar">
          {props.config.images && <ResultList data={props.data} config={props.config} />}
        </div>
      </div>
    </div>
  );
}

export default Similar