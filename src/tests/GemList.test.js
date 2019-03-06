import React from 'react'
import { shallow } from 'enzyme'

import GemList from '../components/GemList'
import gems from './fixture'

test('should render GemList correctly', () => {
  const wrapper = shallow(<GemList gems={gems}/>)
  expect(wrapper).toMatchSnapshot()
})