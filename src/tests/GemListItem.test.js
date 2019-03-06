import React from 'react'
import { shallow } from 'enzyme'

import GemListItem from '../components/GemListItem';
import gems from './fixture'

let wrapper
const gem = gems[0]

beforeEach(() => {
  const handleRemoveGem = jest.fn()
  const handleSaveGem = jest.fn()
  wrapper = shallow(<GemListItem
    handleRemoveGem={handleRemoveGem}
    handleSaveGem={handleSaveGem}
    name={gem.name}
    info={gem.info}
    version={gem.version}
    author={gem.author}
    downloads={gem.downloads}
    project_uri={gem.project_uri}
     />)
})

test('should render GemListItem correctly', () => {
  expect(wrapper).toMatchSnapshot()
})