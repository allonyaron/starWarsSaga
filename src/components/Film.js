import React from 'react';

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Film = (props) => {
    const { film } = props;
    return ( 
    	<li className="film"> 
    		<p><span className="p-header">Title: </span>{ film.title }</p>
        	<p><span className="p-header">Director: </span>{ film.director }</p>
        	<p><span className="p-header">Producer: </span>{ film.producer }</p>
        	<p><span className="p-header">Release Date: </span>{ dateDisplay(film.release_date) }</p>
    	</li>
    );
}

export default Film;