import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ character }) => {

  return (
    <article key={ character.name } class='character'>
        <h2>{ character.name }</h2>
        <p>Gender: { character.gender }</p>
        <p>Birthday: { character.birth_year }</p>
        <Link to='/characters/{ character.name }'>view character</Link>
    </article>
  );

};

export default Character;
