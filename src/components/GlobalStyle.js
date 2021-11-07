import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		background: #1b1b1b;
		font-family: 'Inter', sans-serif;
	}

	button {
		font-family: 'Inter', sans-serif;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 1px solid #23d997;
		background: transparent;
		color: #ffffff;
		transition: all 0.5s ease;

		&:hover {
			background-color: #23d997;
			color: #ffffff;
		}
		
	}

	h2 {
		font-weight: lighter;
		font-size: 4rem;
	}
	h3 {
		color: #ffffff;
	}
	h4 {
		font-weight: bold;
		font-size: 2rem;
	}
	a {
		font-size: 1.1.rem;
	}
	span {
		font-weight: bold;
		color: #23d997;
	}
	
	p {
		padding: 3rem 0rem;
		color: #cccccc;
		font-size: 1.4rem;
		line-height: 150%;
	}

`;

export default GlobalStyle;
