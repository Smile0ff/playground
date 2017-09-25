import charactersActions, { LOAD_CHARACTERS } from '../actions/charactersActions';

describe('character list actions', () => {

  it('should fire action to load character list', () => {
    const { loadCharacters } = charactersActions;
    const expectedLoadCharacters = {
      type: LOAD_CHARACTERS
    }

    expect(loadCharacters()).toEqual(expectedLoadCharacters);
  });

});
