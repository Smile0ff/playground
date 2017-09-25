import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CharacterList from '../components/characterList';

test('should render characterList', () => {
  const characters = {
    loading: false,
    data: {
      count: 1,
      next: '',
      previous: '',
      results: [
        {
          birth_year: '57BBY',
          created: '2014-12-10T16:16:29.192000Z',
          edited: '2014-12-20T21:17:50.325000Z',
          eye_color: 'blue-gray',
          films: [],
          gender: 'male',
          hair_color: 'auburn, white',
          height: '182',
          homeworld: '',
          mass: '77',
          name: 'Obi-Wan Kenobi',
          skin_color: 'fair',
          species: [],
          starships: [],
          url: '',
          vehicles: []
        },
        {
          birth_year: '57BBY',
          created: '2014-12-10T16:16:29.192000Z',
          edited: '2014-12-20T21:17:50.325000Z',
          eye_color: 'blue-gray',
          films: [],
          gender: 'male',
          hair_color: 'auburn, white',
          height: '182',
          homeworld: '',
          mass: '77',
          name: 'Obi-Wan Kenobi 2',
          skin_color: 'fair',
          species: [],
          starships: [],
          url: '',
          vehicles: []
        }
      ]
    },
    err: null
  };
  const loadCharacters = () => {};
  const component = renderer.create(<CharacterList characters={ characters } loadCharacters={ loadCharacters } />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  expect(tree.children).toHaveLength(3);

});
