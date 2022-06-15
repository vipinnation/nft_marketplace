import {
	Box,
	Button,
	CardMedia,
	Container,
	Grid,
	Paper,
	Typography
} from "@mui/material";
import React from "react";
import Eth from "../public/eth.svg";
import { StyledTypography } from "../styles/styledComponents";
import ReadMoreReact from "read-more-react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const SingleAsset = ({ isCollection, data }) => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 4
			}}
		>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4} lg={5}>
					<Box
						sx={{
							py: 2,
							mx: "auto",
							width: "max-content",
							display: ["block", "block", "none"]
						}}
					>
						<Typography variant="h5" fontWeight="bolder" marginBottom={0.5}>
							{data.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							From{" "}
							<Typography
								variant="body2"
								fontWeight="bolder"
								color="text.primary"
								component="span"
							>
								{data.price}ETH
							</Typography>
						</Typography>
					</Box>
					<Paper
						elevation={5}
						sx={{
                            mt:2,
							borderRadius: 2,
							maxWidth: ["580px", "580px", "100%"],
							mx: "auto"
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
								py: 1,
								px: 2
							}}
						>
							<Eth />
							<Box
								sx={{
									borderRadius: 10,
									background: (theme) =>
										`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 110%)`,
									paddingX: 3,
									paddingY: 1
								}}
							>
								<Typography variant="body2" fontWeight="bold">
									{data.category}
								</Typography>
							</Box>
						</Box>
						<CardMedia
							component="img"
							height="100%"
							image={data.image}
							alt="nft name"
							sx={{
								borderBottomRightRadius: "inherit",
								borderBottomLeftRadius: "inherit"
							}}
						/>
					</Paper>
				</Grid>

				<Grid item xs={12} md={8} lg={7}>
					<Box
						sx={{
							py: 2
						}}
					>
						<Typography variant="h5" fontWeight="bolder" marginBottom={0.5}>
							{data.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							From{" "}
							<Typography
								variant="body2"
								fontWeight="bolder"
								color="text.primary"
								component="span"
							>
								{data.price}ETH
							</Typography>
						</Typography>
						<Box
							sx={{
								my: 5
							}}
						>
							<Typography variant="body1" fontWeight="bold" marginBottom={1}>
								Details
							</Typography>
							<Box
								sx={{
									mb: 4,
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexWrap: "wrap",
									gap: 1
								}}
							>
								<Typography variant="body1">
									{" "}
									Owned by{" "}
									<Typography
										variant="body1"
										color="secondary"
										fontWeight="bold"
										component="span"
									>
										{data.owner}{" "}
									</Typography>{" "}
								</Typography>
								<Typography variant="body1">
									{" "}
									Created by{" "}
									<Typography
										variant="body1"
										color="secondary"
										fontWeight="bold"
										component="span"
									>
										{data.creator}{" "}
									</Typography>{" "}
								</Typography>
							</Box>
							<Typography variant="body1" color="text.secondary">
								{data.description}
							</Typography>
						</Box>
						<Paper
							elevation={5}
							sx={{
								borderRadius: 2,
								p: 2
							}}
						>
							<Typography variant="body1" color="text.secondary">
								Current Price
							</Typography>
							<Box sx={{}}>
								<Typography variant="h5" fontWeight="bold">
									<Box marginRight={1} sx={{ display: "inline" }}>
										<Eth />
									</Box>
									{data.price}
									<Typography
										variant="body1"
										component="span"
										color="text.secondary"
										marginLeft={0.5}
									>
										($709,312.50)
									</Typography>
								</Typography>
							</Box>
							<Button
								color="primary"
								variant="contained"
								sx={{
									mt: 3,
									px: 6,
                                    py:1
								}}
							>
								<AccountBalanceWalletIcon />
								<Typography
									fontWeight="bold"
									variant="subtitle1"
									sx={{
										textTransform: "capitalize",
										ml: 1
									}}
								>
									Buy Now
								</Typography>
							</Button>
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SingleAsset;

// TODO: make changes to nfts that are not for sale
