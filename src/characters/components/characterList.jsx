import React, { Component } from 'react';

import Character from './character';

class CharacterList extends Component{

    componentDidMount(){
        const { loadCharacters } = this.props;

        loadCharacters();
    }

    render(){
        const { characters } = this.props;
        const data = characters.data || {};
        const results = data.results || [];

        const mappedResults = results.map((res) => (<Character key={ res.name } character={ res } />));

        return(
            <section class='characters-list'>
                <h1>Star Wars Characters</h1>
                { mappedResults }
            </section>
        );
    }

}

export default CharacterList;
