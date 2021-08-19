import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
	return (
		<nav className="navbar  bg-primary">
			<h1>{title}</h1>
			<ul>
				<li>
					<Link to="/Posts">Posts</Link>
				</li>
				<li>
					<Link to="/Gallery">Gallery</Link>
				</li>
				<li>
					<Link to="/Contacts">Contacts</Link>
				</li>
				<li>
					<Link to="/accountBox">accountBox</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
};
Navbar.defaultProps = {
	title: 'React SPA Homework',
};
export default Navbar;
