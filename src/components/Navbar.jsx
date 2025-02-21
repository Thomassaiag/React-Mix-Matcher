import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<div className="title">MixMaster</div>
			<div className="links-container">
				<Link to="landing">Home</Link>
				<Link to="about">About</Link>
				<Link to="newsletter">Newsletter</Link>
			</div>
		</nav>
	);
};
