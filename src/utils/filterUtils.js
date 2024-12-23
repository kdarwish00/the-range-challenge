/**
 * Sorts an array of products based on the selected criteria in ascending order.
 *
 * @param {Array} products - The array of product objects to be sorted.
 * @param {string} sortBy - The criteria by which to sort the products.
 *                          Valid values are "price", "review", "name", and "saving".
 *
 * @returns {Array} - A new array of products sorted based on the selected criteria.
 */
export const sortProducts = (products, sortBy) => {
	switch (sortBy) {
		case "price":
			return [...products].sort((a, b) => a.price - b.price);
		case "review":
			return [...products].sort((a, b) => a.reviews - b.reviews);
		case "name":
			return [...products].sort((a, b) => a.name.localeCompare(b.name));
		case "saving":
			return [...products].sort(
				(a, b) =>
					(a.was_price ? a.was_price - a.price : 0) -
					(b.was_price ? b.was_price - b.price : 0)
			);
		default:
			return products;
	}
};

/**
 * Returns the button styles based on whether the current filter is selected.
 *
 * @param {string} filter - The filter criterion, e.g., "price", "review", "name", or "saving".
 * @param {string} sortBy - The currently selected sorting criterion.
 *
 * @returns {Object} - The style object to be applied to the button.
 */
export const getButtonStyle = (filter, sortBy) => ({
	width: "100%",
	borderColor: "grey.200",
	color: sortBy === filter ? "white" : "black",
	textTransform: "none",
	backgroundColor: sortBy === filter ? "#ed6c02" : "transparent",
});
