import { useState, useEffect } from "react";
import {
	addToBasket as addToBasketUtil,
	removeFromBasket as removeFromBasketUtil,
} from "../utils/basketUtils";

/**
 * Custom hook for managing basket functionality, including adding, removing, and toggling the basket.
 *
 * @returns {Object} - An object containing:
 *   - `basketItems` (Array): The current basket items.
 *   - `basketOpen` (boolean): The current open/closed state of the basket.
 *   - `handleAddToBasket` (Function): Adds a product to the basket and updates the state.
 *   - `handleRemoveFromBasket` (Function): Removes a product from the basket and updates the state.
 *   - `toggleBasket` (Function): Toggles the basket open/closed state and refreshes items when opening.
 *   - `refreshBasketItems` (Function): Refreshes the basket state from localStorage.
 */
const useBasket = () => {
	const [basketItems, setBasketItems] = useState([]);
	const [basketOpen, setBasketOpen] = useState(false);

	/**
	 * Refreshes the basket items by fetching the latest data from localStorage.
	 */
	const refreshBasketItems = () => {
		const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
		setBasketItems(savedBasket);
	};

	/**
	 * Toggles the basket's open/closed state.
	 * Refreshes basket content from localStorage when opening.
	 */
	const toggleBasket = () => {
		setBasketOpen((prev) => !prev);
		if (!basketOpen) {
			refreshBasketItems();
		}
	};

	/**
	 * Loads the basket items from localStorage on initial render.
	 * Executes only once when the component using this hook is mounted.
	 */
	useEffect(() => {
		refreshBasketItems();
	}, []);

	/**
	 * Adds a product to the basket and updates the state to reflect the changes.
	 *
	 * @param {Object} product - The product to add to the basket.
	 *                           Must include an `id` property to identify the product.
	 */
	const handleAddToBasket = (product) => {
		addToBasketUtil(product);

		const updatedBasket = JSON.parse(localStorage.getItem("basket")) || [];
		setBasketItems(updatedBasket);
	};

	/**
	 * Removes a product from the basket by its index and updates the state.
	 *
	 * @param {number} index - The index of the product to remove in the basket array.
	 *                         Must be a valid index within the basket.
	 */
	const handleRemoveFromBasket = (index) => {
		const updatedBasket = removeFromBasketUtil(index);
		setBasketItems(updatedBasket);
	};

	return {
		basketItems,
		basketOpen,
		handleAddToBasket,
		handleRemoveFromBasket,
		toggleBasket,
		refreshBasketItems,
	};
};

export default useBasket;
