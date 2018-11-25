import React from 'react';
import * as avatars from '../util/avatars';
import '../css/user.css';

const User = (props) => {
  return (
    // TODO: find another way to make div and all its content clickable as one unit (other than props.id everywhere)
    <div id={props.id} key={props.id} className='user' style={{ border: '1px solid gray' }} onClick={props.handleClick} >
      <img id={props.id} src={avatars[props.name]} align='middle' alt={`avatar for user ${props.name}`}/>
      <div className='userName' id={props.id}>{props.name}</div>
    </div>
  );
}

export default User;
