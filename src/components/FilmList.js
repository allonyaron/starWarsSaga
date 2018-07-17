import React from 'react';
import Film from './Film';

import { v4 } from 'node-uuid';

const FilmList = (props) => {

  return (
        <ul className="film-container">
          {props.filmsData.map((film, index) => <Film film={film} key={ v4() } />)}
        </ul>
    ); 
};

export default FilmList;