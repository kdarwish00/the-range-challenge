/**
 * Adds a product to the basket in localStorage.
 * If the product already exists, it increments its quantity.
 *
 * @param {Object} product - The product to add to the basket.
 *                           Must include an `id` property to identify the product.
 */
export const addToBasket = (product) => {
	const basket = JSON.parse(localStorage.getItem("basket")) || [];

	const existingProductIndex = basket.findIndex(
		(item) => item.img === product.img
	);

	if (existingProductIndex !== -1) {
		basket[existingProductIndex].quantity += product.quantity || 1;
	} else {
		basket.push({ ...product, quantity: product.quantity || 1 });
	}

	// Save the updated basket to localStorage
	localStorage.setItem("basket", JSON.stringify(basket));
};

/**
 * Removes a product from the basket by its index in the array.
 *
 * @param {number} index - The index of the product to remove in the basket array.
 *                         Must be a valid index within the basket.
 * @returns {Array} - The updated basket after the removal.
 */
export const removeFromBasket = (index) => {
	const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];

	savedBasket.splice(index, 1);
	localStorage.setItem("basket", JSON.stringify(savedBasket));

	return savedBasket;
};
