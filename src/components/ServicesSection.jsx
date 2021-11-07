import React from "react";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamvwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import styled from "styled-components";
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
	return (
		<Services>
			<Description>
				<h2>
					Hight <span>quality</span> services
				</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img src={clock} alt="clock" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={diaphragm} alt="diaphragm" />
							<h3>Pro Grade Gear</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={teamvwork} alt="teamvwork" />
							<h3>Teamvwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={money} alt="Affordable" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
				</Cards>
			</Description>
			<Image>
				<img src={home2} alt="home2" />
			</Image>
		</Services>
	);
};

const Services = styled(About)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background-color: #fff;
			color: #000;
			padding: 1rem;
		}
	}
`;

export default ServicesSection;
