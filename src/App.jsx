
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import { About } from "./pages/About";
import { Cocktail } from "./pages/Cocktail";
import { HomeLayout } from "./pages/HomeLayout";
import { Landing } from "./pages/Landing";
import { Newsletter } from "./pages/Newsletter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing/>,
	},
	{
		path: "/about",
		element: (
			<div>
				<About/>
			</div>
		),
	},
]);


const App = () => {

	return (
		<RouterProvider router={router}>
            <Landing/>
        </RouterProvider>
	);
};
export default App;
