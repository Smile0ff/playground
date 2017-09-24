import { watchGetCharacters } from './saga/charactersSaga';

import charactersReducer from './reducers/charactersReducer';
import CharactersContainer from './containers/charactersContainer';

import sagaRegistry from '../shared/registry/sagaRegistry';
import reducerRegistry from '../shared/registry/reducerRegistry';

sagaRegistry.register(watchGetCharacters);

const moduleName = 'characters';
reducerRegistry.register(moduleName, charactersReducer);

export default CharactersContainer;