import React from 'react';

const Character = ({ character }) => (
    <article key={ character.name } class='character'>
        <h2>{ character.name }</h2>
        <p>Gender: { character.gender }</p>
        <p>Birthday: { character.birth_year }</p>
    </article>
);

export default Character;