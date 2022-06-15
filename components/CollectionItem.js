import {
	Box,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardActions,
	CardContent,
	CardActionArea,
	Avatar
} from "@mui/material";
import Link from "next/link";

const CollectionItem = ({ id, title, price, creator, image }) => {
	return (
		<>
			<Grid item xs={12} sm={6} md={3}>
				<Link href={`/collections${id}`}>
					<a>
						<Card
							raised
							sx={{
								maxWidth: "300px",
								mx: "auto",
								borderRadius: 4,
								position: "relative",
								border: "1px solid transparent",
								padding: "0",
								backgroundOrigin: "border-box",
								backgroundClip: "content-box , border-box",
								backgroundImage: (theme) =>
									`linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
								minWidth: "200px"
							}}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="220"
									image={image}
									alt="nft name"
									sx={{}}
								/>
								<CardContent
									sx={{
										padding: "0",
										background: "#252836"
									}}
								>
									<Box
										sx={{
											px: 3,
											py: 2,
											borderBottom: "1px solid transparent",
											borderImage: (theme) =>
												`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
											borderImageSlice: 1
										}}
									>
										<Box
											sx={{
												display: "flex"
											}}
										>
											<Box
												sx={{
													mr: 1
												}}
											>
												<Avatar
													alt="Remy Sharp"
													src="https://i.pravatar.cc/300"
												/>
											</Box>
											<Box>
												<Typography
													variant="body2"
													component="div"
													fontWeight="bold"
													sx={{
														textTransform: "uppercase"
													}}
													mb={0.5}
												>
													{title}
												</Typography>
												<Typography variant="subtitle2" component="div">
													By {creator}
												</Typography>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											px: 3,
											py: 1.5
										}}
									>
										<Typography variant="subtitle2" component="div">
											Price
										</Typography>
										<Typography variant="body2" fontWeight="bold">
											{price} ETH
											<Typography
												variant="subtitle2"
												component="span"
												marginLeft={1}
											>
												(10.2 USD)
											</Typography>
										</Typography>
									</Box>
								</CardContent>
							</CardActionArea>
						</Card>
					</a>
				</Link>
			</Grid>
		</>
	);
};

export default CollectionItem;
