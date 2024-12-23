import { useEffect, useState } from "react";

/**
 * Custom hook to fetch and return a list of products from an API.
 *
 * This hook fetches data from the `http://localhost:8000/api/products.php` endpoint and stores
 * the product list in the state. It returns the list of products to be used in components.
 *
 * @returns {Array} - The list of products fetched from the API. Each product is expected to
 *                    be an object containing details like name, price, reviews, etc.
 */
const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/products.php")
			.then((res) => res.json())
			.then((data) => setProducts(data.product_arr));
	}, []);

	return products;
};

export default useProducts;
