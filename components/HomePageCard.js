import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from "@mui/material";
import Link from 'next/link'

import LinkArrow from "../public/linkArrow.svg";

const HomePageCard = () => {
	return (
		<>
			<Card
				sx={{
					maxWidth: "345px",
					mx: 'auto'
				}}
				square
			>
				<CardMedia
					component="img"
					height="240"
					image="/sampleNFT.png"
					alt="nft name"
				/>
				<CardContent
					sx={{
						px: 4,
						py: 2
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between"
						}}
					>
						<Typography
							variant="h5"
							component="div"
							fontWeight="bold"
							sx={{
								textTransform: "uppercase",
								letterSpacing: "0.1em"
							}}
						>
							ATHENA
						</Typography>
						<Link href="/details">
							<a>
								<LinkArrow />
							</a>
						</Link>
					</Box>
					<Box
						sx={{
							mt: 1
						}}
					>
						<Typography variant="body2" color="text.secondary">
							Price
						</Typography>
						<Typography variant="h6">
							3.00 ETH
							<Typography variant="body2" component="span" marginLeft={1}>
								(10.2 USD)
							</Typography>
						</Typography>
					</Box>
				</CardContent>
				<CardActions
					sx={{
						px: 4,
						display: "flex",
						justifyContent: "space-between"
					}}
				>
					<Button
						color="white"
						sx={{
							borderRadius: 0,
							py: 1,
							px: 2,
							flex: 1,
							background: (theme) =>
								`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
						}}
					>
						Buy Now
					</Button>
					<Button
						color="white"
						sx={{
							position: "relative",
							borderRadius: 0,
							border: "1px solid transparent",
							padding: "0",
							backgroundOrigin: "border-box",
							backgroundClip: "content-box , border-box",
							backgroundImage: (theme) =>
								`linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`
						}}
					>
						<Box sx={{ py: 1, px: 2 }}>View Info</Box>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default HomePageCard;
