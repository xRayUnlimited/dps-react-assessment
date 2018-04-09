import React from 'react';
import { connect } from 'react-redux';
import { Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BreweryView = ({ brewery = {} }) => (
  <Container>
    <Link to ='/breweries'>All Breweries</Link>
    <Header>
    {brewery.name}
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
          <Table.Cell>{brewery.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Type</Table.Cell>
          <Table.Cell>{ brewery.brand_classification }</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Established</Table.Cell>
          <Table.Cell>{ brewery.established }</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { brewery: state.breweries.find( b => b.id === props.match.params.id ) }
}

export default connect(mapStateToProps)(BreweryView);