import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'

import Search from './Search'
import GemList from './GemList'
import SavedGemsList from './SavedGemsList'

const AppWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400");
  font-family: 'Roboto', sans-serif;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchResults = this.handleSearchResults.bind(this)
    this.handleSaveGem = this.handleSaveGem.bind(this)
    this.handleRemoveGem = this.handleRemoveGem.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      gems: '',
      savedGems: [],
      dataLoaded: false
    }
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('savedGems');
      const savedGems = JSON.parse(json);

      if (savedGems) {
        this.setState(() => ({ savedGems }));
      }
    } catch (e) {
      // Do nothing :|
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.savedGems.length !== this.state.savedGems.length) {
      const json = JSON.stringify(this.state.savedGems);
      localStorage.setItem('savedGems', json);
    }
  }

  handleSearchResults (query) {
    const urlBase = 'http://localhost:3000/api/v1/search.json'
    const url = `${urlBase}?query=${query}`
    fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json()
    })
    .then((result) => {
      this.setState({
        gems: result,
        dataLoaded: true
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  handleSaveGem (props) {
    if (this.state.savedGems.filter((gem) => gem.sha === props.sha).length !== 0) {
      // make sure gem isn't already saved
      console.warn("gem already saved!")
    } else {
      // if it's not saved, save it.
      this.setState({
        savedGems: [...this.state.savedGems, props]
      })
    }
  }

  handleInputChange (query) {
    if (query === '') {
      this.setState(() => ({ dataLoaded: false }))
    }
  }

  handleRemoveGem (props) {
    this.setState((prevState) => ({
      savedGems: prevState.savedGems.filter((gem) => gem.sha !== props.sha)
    }));
  }

  render() {
    return (
      <AppWrapper>
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
        >
          Search Ruby Gems ✨
        </Typography>
        <Search
            handleSearchResults={this.handleSearchResults}
            handleInputChange={this.handleInputChange}
          />
        <Grid
          container
          spacing={24}
        >
          <Grid
            item
            md={6}
            xs={12} 
            >
            {!this.state.dataLoaded 
            ? <Typography
              component="h1"
              variant="h5"
              gutterBottom>
                No gems listed. Try Searching.
            </Typography> 
            : <GemList
              gems={this.state.gems}
              handleSaveGem={this.handleSaveGem}
            />
            }
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            >
            <SavedGemsList
              savedGems={this.state.savedGems}
              handleRemoveGem={this.handleRemoveGem}  
              />
          </Grid>
        </Grid>
      </AppWrapper>
    )
  }
}