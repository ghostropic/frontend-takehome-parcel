import React from 'react'
import { shallow } from 'enzyme'
import { Input, Button } from '@material-ui/core'

import Search from '../components/Search'

test('should render Search component correctly', () => {
  const wrapper = shallow(<Search />)
  expect(wrapper).toMatchSnapshot()
})

test('should call handleInputChange prop on submit', () => {
  const handleSearchResultsSpy = jest.fn()
  const wrapper = shallow(<Search handleSearchResults={handleSearchResultsSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    target: { elements: { query: 'value' } }
  })
  expect(handleSearchResultsSpy).toHaveBeenCalled()
})

test('should call handleInputChange on change', () => {
  const value = 'hi'
  const handleInputChangeSpy = jest.fn()
  const wrapper = shallow(<Search handleInputChange={handleInputChangeSpy} />)
  const query = { target: { value } }
  wrapper.find(Input).prop('onChange')(query)
  expect(handleInputChangeSpy).toHaveBeenCalledWith(value)
})