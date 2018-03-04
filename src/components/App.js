// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import GameTitle from './home/GameTitle';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
        <div className="container-fluid">
          <Grid>
            <Row>
              <GameTitle games={data}/>
            </Row>
          </Grid>
        </div>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

let data = [
    {
        uniqueId: 1,
        source: "..images/cuphead.jpg",
        title: "CupHead",
        desc: "Description"
    },
    {
        uniqueId: 2,
        source: "..images/over.jpg",
        title: "Overwatch",
        desc: "Description"
    },
    {
        uniqueId: 3,
        source: "..images/pubg.jpg",
        title: "Player Unknown's Battle Ground",
        desc: "Description"
    }
];

export default connect(mapStateToProps)(App);
