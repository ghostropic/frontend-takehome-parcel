import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core'

import Button from './Button'

const StyledCard = styled(Card)`
position: relative;
top: 20%;
margin: 20px;
`

export const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default class GemListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {
      name,
      info, 
      version,
      authors,
      downloads,
      project_uri,
      handleSaveGem,
      handleRemoveGem,
      listType,
      isSaved
    } = this.props
    return (
      <StyledCard>
        <CardContent>
          <Typography component="h5" variant="h5">
          <p>{name}</p>
          </Typography>
          <p>{info}</p>
          <p>{`Version: ${version}`}</p>
          <p>{`Authors: ${authors}`}</p>
          <p>{`Downloads: ${downloads}`}</p>
          <p>{project_uri}</p>
          <StyledButton
            listType={listType}
            text={isSaved ? 'remove' : 'save'}
            onClick={(e) => {
              handleRemoveGem
                ? handleRemoveGem(this.props)
                : handleSaveGem(this.props)
            }}
            >
          </StyledButton>
        </CardContent>
      </StyledCard>
    )
  }
}