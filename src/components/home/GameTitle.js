import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import { Col, Thumbnail, Button } from "react-bootstrap";

// const GameTitle = (props) => {
// 	return (
// 		<Col xs={6} md={4}>
// 			<Thumbnail src={this.props.source} alt="242x200">
// 				<h3>{this.props.title}</h3>
// 				<p>{this.props.desc}</p>
// 				<p>
// 					<Button bsStyle="danger">Uninstall</Button>
// 				</p>
// 			</Thumbnail>
// 		</Col>
// 	);
// };

// const GameList = (props) => {
// 	return (
// 		<div>
// 			{this.props.games.map(game => <GameTitle {...game} key={game.uniqueId} />)}
// 		</div>
// 		);
// };

// const GameTitle = (props) => {
// 	return (
// 		<div>
// 		<Col xs={6} md={4}>
// 			<Thumbnail src={require("../images/cuphead.jpg")} alt="242x200">
// 				<h3>CupHead</h3>
// 				<p>Description</p>
// 				<p>
// 					<Button bsStyle="danger">Uninstall</Button>
// 				</p>
// 			</Thumbnail>
// 		</Col>
// 		<Col xs={6} md={4}>
// 			<Thumbnail src={require("../images/over.jpg")} alt="242x200">
// 				<h3>Overwatch</h3>
// 				<p>Description</p>
// 				<p>
// 					<Button bsStyle="danger">Uninstall</Button>
// 				</p>
// 			</Thumbnail>
// 		</Col>
// 		<Col xs={6} md={4}>
// 			<Thumbnail src={require("../images/pubg.jpg")} alt="242x200">
// 				<h3>PlayerUnknown's BattleGround</h3>
// 				<p>Description</p>
// 				<p>
// 					<Button bsStyle="danger">Uninstall</Button>
// 				</p>
// 			</Thumbnail>
// 		</Col>
// 		</div>
// 	);
// };

class GameTitle extends React.Component {
	constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }
	render() {
		return (
			<div>
				<Col xs={6} md={4}>
					<Thumbnail
						src={require("../images/cuphead.jpg")}
						alt="242x200"
					>
						<h3>CupHead</h3>
						<p>Description</p>
						<p>
							<Button onClick={this.handleClick} bsStyle="danger">Uninstall</Button>
						</p>
					</Thumbnail>
				</Col>
				<Col xs={6} md={4}>
					<Thumbnail
						src={require("../images/over.jpg")}
						alt="242x200"
					>
						<h3>Overwatch</h3>
						<p>Description</p>
						<p>
							<Button bsStyle="danger">Uninstall</Button>
						</p>
					</Thumbnail>
				</Col>
				<Col xs={6} md={4}>
					<Thumbnail
						src={require("../images/pubg.jpg")}
						alt="242x200"
					>
						<h3>PlayerUnknown's BattleGround</h3>
						<p>Description</p>
						<p>
							<Button bsStyle="danger">Uninstall</Button>
						</p>
					</Thumbnail>
				</Col>
			</div>
		);
	}
}

export default GameTitle;
