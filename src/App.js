import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/homework-17/Posts';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/homework-18/Contacts';
import AccountBox from './components/accountBox/AccountBoxApp';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Posts" component={Posts} />
						<Route exact path="/Gallery" component={Gallery} />
						<Route exact path="/Contacts" component={Contacts} />
						<Route exact path="/AccountBox" component={AccountBox} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};
export default App;
