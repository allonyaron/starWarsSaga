import React from 'react';
import { v4 } from 'node-uuid';

const Button = (props) => {

// deconstruct here

  return <button 
  			onClick={props.handleStarWarsRequest(props.character.url, props.character.name)} 
  			className={props.active === props.character.name ? 'active' : ''}>
  				{props.character.name}
  			</button>
}

export default Button;