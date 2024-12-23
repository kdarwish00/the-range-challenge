import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	Button,
	Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import useProducts from "../hooks/useProducts";
import useBasket from "../hooks/useBasket";
import { sortProducts, getButtonStyle } from "../utils/filterUtils";

const ProductList = () => {
	const products = useProducts();
	const { handleAddToBasket } = useBasket();

	const [sortBy, setSortBy] = useState("");

	const sortedProducts = sortProducts(products, sortBy);

	return (
		<section className="product-list">
			{/* Filters */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: 2,
					marginBottom: 2,
				}}
			>
				<Button
					sx={getButtonStyle("price", sortBy)}
					variant="outlined"
					onClick={() => setSortBy("price")}
				>
					Sort by Price
				</Button>
				<Button
					sx={getButtonStyle("review", sortBy)}
					variant="outlined"
					onClick={() => setSortBy("review")}
				>
					Sort by Review
				</Button>
				<Button
					sx={getButtonStyle("name", sortBy)}
					variant="outlined"
					onClick={() => setSortBy("name")}
				>
					Sort by Name
				</Button>
				<Button
					sx={getButtonStyle("saving", sortBy)}
					variant="outlined"
					onClick={() => setSortBy("saving")}
				>
					Sort by Saving
				</Button>
			</Box>

			{/* Product Cards */}
			<Grid container spacing={2}>
				{sortedProducts.map((product, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
						<Card
							sx={{
								display: "flex",
								flexDirection: "column",
								height: "100%",
								textAlign: "center",
							}}
						>
							<CardMedia
								component="img"
								image={`/img/${product.img}.jpg`}
								alt={product.name}
								height="200"
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Box
									sx={{ height: "100px", overflow: "hidden" }}
								>
									<Typography variant="h6" component="h2">
										{product.name}
									</Typography>
								</Box>

								<Typography
									variant="body1"
									color="default"
									fontWeight="bold"
									sx={{ fontSize: "1.5rem" }}
								>
									£{product.price}
								</Typography>

								{/* Previous Price */}
								<Box
									sx={{
										visibility: product.was_price
											? "visible"
											: "hidden",
									}}
								>
									<Typography
										variant="body2"
										color="error"
										sx={{
											fontSize: "1rem",
											textDecoration: "line-through",
										}}
									>
										Was £{product.was_price}
									</Typography>
								</Box>

								{/* Reviews */}
								{product.reviews && (
									<Typography
										variant="body2"
										color="success.main"
										sx={{ fontSize: "1rem" }}
									>
										{product.reviews}% Review Score
									</Typography>
								)}
							</CardContent>

							{/* Add to basket */}
							<Button
								variant="contained"
								color="warning"
								onClick={() => handleAddToBasket(product)}
								sx={{ margin: 2, textTransform: "none" }}
							>
								Add to Basket
							</Button>
						</Card>
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default ProductList;
