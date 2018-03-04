import React from "react";
import { Link } from "react-router";
import { Carousel } from "react-bootstrap";

class HomePage extends React.Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						width={900}
						height={500}
						alt="900x500"
						src={require("../images/cuphead.jpg")}
					/>
					<Carousel.Caption>
						<h3>CupHead</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						width={900}
						height={500}
						alt="900x500"
						src={require("../images/meat.png")}
					/>
					<Carousel.Caption>
						<h3>Super Meat Boy</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						width={900}
						height={500}
						alt="900x500"
						src={require("../images/over.jpg")}
					/>
					<Carousel.Caption>
						<h3>Overwatch</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						width={900}
						height={500}
						alt="900x500"
						src={require("../images/pubg.jpg")}
					/>
					<Carousel.Caption>
						<h3>PlayerUnknown's Battleground</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default HomePage;
