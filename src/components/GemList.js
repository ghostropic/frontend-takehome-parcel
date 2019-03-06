import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import GemListItem from './GemListItem'

export default class GemList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    const { gems, handleSaveGem } = this.props

    return (
      <div>
        {gems.length !== 0 && <Typography component="h1" variant="h5" gutterBottom>Search Results</Typography>}
        {
          gems.length === 0
            ? (<Typography component="h1" variant="h5">No gems match your search query :(</Typography>)
            : (gems.map(gem => <GemListItem handleSaveGem={handleSaveGem} key={gem.sha} {...gem} />))
        }
      </div>
    )
  }
}
