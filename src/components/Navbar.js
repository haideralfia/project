import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand px-5" to="/">
					Online Banking Application
				</Link>
				<div className="ms-auto px-5">
					<p className="navbar-text">Contact us</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
