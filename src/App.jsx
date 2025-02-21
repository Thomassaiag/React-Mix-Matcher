import { About } from "./pages/About";
import { Cocktail } from "./pages/Cocktail";
import { HomeLayout } from "./pages/HomeLayout";
import { Landing } from "./pages/Landing";
import { Newsletter } from "./pages/Newsletter";

const App = () => {
	return (
		<>
			<About />
			<Cocktail />
			<Error />
			<HomeLayout />
			<Landing />
			<Newsletter />
			<h2>mixmaster starter</h2>;
		</>
	);
};
export default App;
