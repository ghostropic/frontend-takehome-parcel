import React from 'react'
import styled from 'styled-components'
import { Input, Button } from '@material-ui/core'

const StyledWrapper = styled.div`
  height: 60px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
 
  onSubmit (e) {
    e.preventDefault()
    const query = e.target.elements.query.value
    this.props.handleSearchResults(query)
  }

  onChange (e) {
    const query = e.target.value
    this.props.handleInputChange(query)
  }
 
  render() {
    return (
      <StyledWrapper>
        <form onSubmit={this.onSubmit}>
          <Input
            onChange={this.onChange}
            type="text"
            placeholder="Search Ruby gems."
            name="query"
          />
          <Button type="submit">Search</Button>
        </form>
      </StyledWrapper>
    )
  }
}
