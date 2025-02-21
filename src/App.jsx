import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	About,
	Cocktail,
	Newsletter,
	Error,
	HomeLayout,
	Landing,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
	},
	{
		path: "/about",
		element: <About />,
	},
]);

const App = () => {
	return (
		<RouterProvider router={router}>
			<Landing />
		</RouterProvider>
	);
};
export default App;
