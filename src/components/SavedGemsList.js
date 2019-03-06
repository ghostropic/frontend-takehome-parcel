import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import GemListItem from './GemListItem'

const StyledTypography = styled(Typography)`
  margin-left: 20px;
`

export default class SavedGemsList extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { savedGems, handleRemoveGem } = this.props
    if (savedGems.length === 0) {
      return <StyledTypography component="h1" variant="h5" gutterBottom>No Gems Saved</StyledTypography>
    }

    return (
      <div>
        <StyledTypography component="h1" variant="h5" gutterBottom>Saved Gems:</StyledTypography>
        {
          savedGems.map(gem => <GemListItem isSaved={true} handleRemoveGem={handleRemoveGem} key={gem.sha} {...gem} />)
        }
      </div>
    )
  }
}