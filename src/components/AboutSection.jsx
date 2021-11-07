import React from "react";

import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Hide, Description, Image } from "../styles";

const AboutSection = () => {
	return (
		<About>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							ypour <span>dreams</span> come
						</h2>
					</Hide>
					<div className="hide">
						<h2>true</h2>
					</div>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We have
					proffesionals with skills.
				</p>
				<button>Contact Us</button>
			</Description>
			<Image className="image">
				<img src={home1} alt="guy with the camera" />
			</Image>
		</About>
	);
};

// Styled Components

export default AboutSection;
