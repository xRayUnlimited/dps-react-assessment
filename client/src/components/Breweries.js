import React from 'react';
import { Header, Segment, Container, Card, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBreweries } from '../actions/breweries';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

class Breweries extends React.Component {
  state = { page: 1 };
  
  componentDidMount() {
    this.props.dispatch(fetchBreweries());
  }

  breweryInfo = (brewery) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
           Est. { brewery.established? brewery.established : 'N/A' }
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
            Type: {brewery.brand_classification}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  displayBreweries = () => {
    return this.props.breweries.map( brewery => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
              {brewery.name}
              <hr />
            </Card.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Card.Meta>
              <span>
                {brewery.website}
              </span>
            </Card.Meta>
            <Card.Description style={styles.description}>
              {brewery.description}
            </Card.Description>
            <Link to ={`/brewery/${brewery.id}`}>
              View Details
            </Link>
          </Card.Content>
          <Card.Content extra>
            { this.breweryInfo(brewery)}
          </Card.Content>
        </Card>
      )
    })
  }

  loadFunction = () => {
    axios.get(`/api/all_breweries?page=${this.state.page + 1 }`)
      .then( res => {
        this.props.dispatch({ type: 'MORE_BREWERS', breweries: res.data.entries })
        this.setState({ page: this.state.page + 1, hasMore: res.data.has_more })
      })
      .catch( err => {
        console.log(err)
    });
  }

  render() {
    const { page, hasMore } = this.state;

    return(
      <Container>
        <Segment basic>
          <Header textAlign='center' as='h1'>Breweries.</Header>
          <InfiniteScroll pageStart={page} loadMore={this.loadFunction} hasMore={hasMore} loader={<div className="loader">Loading ...</div>} useWindow={false}>
            <Card.Group stackable itemsPerRow={2}>
              { this.displayBreweries() }
            </Card.Group>
          </InfiniteScroll>
        </Segment>
      </Container>
    );
  }
}

const styles = {
  description: {
    height: '200px',
    overflow: 'auto',
  }
}

const mapStateToProps = (state) => {
  return{
    breweries: state.breweries,
  }
}

export default connect(mapStateToProps)(Breweries);