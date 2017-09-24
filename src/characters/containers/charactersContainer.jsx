import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getCharactersData } from '../reducers/charactersReducer';
import charactersActions from '../actions/charactersActions';

import CharacterList from '../components/characterList';

const mapStateToProps = (state) => ({
    characters: getCharactersData(state)
});

const mapDispatchToprops = (dispatch) => {
    const { loadCharacters } = charactersActions;

    return {
        loadCharacters: bindActionCreators(loadCharacters, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(CharacterList);
