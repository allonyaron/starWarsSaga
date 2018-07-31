import React from 'react';
import Button from './Button';

import { v4 } from 'node-uuid';


const ButtonList = (props) => {
  return (
            <div className="button-container">
              {props.characters.map((character) => {
                return <Button character={character} key={v4()} active={props.active} handleStarWarsRequest={props.handleStarWarsRequest} />
              })}
            </div>
	    )
	}

export default ButtonList;