import React from 'react';

const Button = (props) => {

  return <button 
  			onClick={props.handleStarWarsRequest(props.character.url, props.character.name)} 
  			className={props.active === props.character.name ? 'active' : ''}>
  				{props.character.name}
  			</button>
}

export default Button;