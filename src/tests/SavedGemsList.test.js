import React from 'react'
import { shallow } from 'enzyme'

import SavedGemsList from '../components/SavedGemsList';
import savedGems from './fixture'

test('should render SavedGemsList correctly', () => {
  const wrapper = shallow(<SavedGemsList savedGems={savedGems} />)
  expect(wrapper).toMatchSnapshot()
})