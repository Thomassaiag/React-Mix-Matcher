import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Landing,
	About,
	Error,
	Newsletter,
	Cocktail,
	HomeLayout,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				element: <Landing />,
				index: true,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cocktail",
				element: <Cocktail />,
			},
			{
				path: "newsletter",
				element: <Newsletter />,
			},
			{
				path: "error",
				element: <Error />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
export default App;
