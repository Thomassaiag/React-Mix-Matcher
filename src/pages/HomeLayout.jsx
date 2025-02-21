import React from "react";
import { Link } from "react-router-dom";

export const HomeLayout = () => {
	return (
		<div>
			<h1>HomeLayout</h1>
			<Link to="/about">About Page</Link>
		</div>
	);
};
