import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Character from '../components/character';

const characterData = {
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
};

test('render character component', () => {
  const component = renderer.create(<Character character={ characterData } />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
