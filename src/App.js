import ProductList from "./components/ProductList";
import './app.css';
import Basket from "./components/Basket";


const App = () => {
	return (
		<main>
			<Basket />
			<h1>Office Supplies</h1>
			<ProductList />
		</main>
	);
};

export default App;
