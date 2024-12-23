import React from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	IconButton,
	Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import useBasket from "../hooks/useBasket";

const Basket = () => {
	const { basketItems, basketOpen, toggleBasket, handleRemoveFromBasket } =
		useBasket();

	return (
		<>
			{/* Basket Icon */}
			<IconButton
				onClick={toggleBasket}
				color="warning"
				sx={{
					position: "fixed",
					top: 16,
					right: 16,
					backgroundColor: "white",
					border: "2px solid orange",
					borderRadius: "50%",
					padding: "8px",
					zIndex: 1000,
				}}
			>
				<ShoppingCartIcon />
			</IconButton>

			{/* Sidebar Drawer */}
			<Drawer anchor="right" open={basketOpen} onClose={toggleBasket}>
				<div style={{ width: 300, padding: 16 }}>
					<Typography variant="h6" gutterBottom>
						Your Basket
					</Typography>

					{basketItems.length === 0 ? (
						<Typography variant="body1" color="textSecondary">
							Your basket is empty.
						</Typography>
					) : (
						<List>
							{basketItems.map((item, index) => (
								<ListItem key={index}>
									<ListItemAvatar>
										<Avatar
											alt={item.name}
											src={`/img/${item.img}.jpg`}
											variant="square"
										/>
									</ListItemAvatar>
									<ListItemText
										primary={item.name}
										secondary={`$${item.price} • Quantity: ${item.quantity}`}
									/>
									<IconButton
										edge="end"
										color="error"
										onClick={() =>
											handleRemoveFromBasket(index)
										}
									>
										<DeleteIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
					)}
				</div>
			</Drawer>
		</>
	);
};

export default Basket;
