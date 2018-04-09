import React from 'react';
import { connect } from 'react-redux';
import { Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BeerView = ({ beer = {} }) => (
  <Container>
    <Link to ='/beers'>All Beers</Link>
    <Header>{beer.name}
    </Header>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{beer.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Style</Table.Cell>
          <Table.Cell>{ beer.style.name }</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ABV</Table.Cell>
          <Table.Cell>{beer.abv}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { beer: state.beers.find( b => b.id === props.match.params.id ) }
}

export default connect(mapStateToProps)(BeerView);
