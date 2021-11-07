import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContacUs from "./pages/ContacUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<AboutUs />
				</Route>
				<Route path="/work" exact>
					<OurWork />
				</Route>
				<Route path="/work/:id">
					<MovieDetail />
				</Route>
				<Route path="/contact">
					<ContacUs />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
