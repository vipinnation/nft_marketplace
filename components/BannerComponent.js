import { Box, Typography, Grid } from "@mui/material";
import BannerItem from "./BannerItem";
import Cart from "../public/cart.svg";
import Collections from "../public/collections.svg";
import Picture from "../public/picture.svg";
import Wallet from "../public/wallet.svg";

const BannerComponent = () => {
	return (
		<>
			<Box
				sx={{
					py: 10,
					px: 8,
					my: 8,
					background: "rgba(0,0,0,0.1)"
				}}
			>
				<Typography variant="h3" fontWeight="bold" marginBottom={10}>
					Create and sell your{" "}
					<Typography
						variant="h2"
						fontWeight="bold"
						component="span"
						sx={{
							background: (theme) =>
								`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 110%)`,
							WebkitBackgroundClip: "text",
							backgrounClip: `text`,
							textFillColor: `transparent`
						}}
					>
						NFTs
					</Typography>
				</Typography>

				<Grid container textAlign="center" spacing={[6, 8, 8, 10]}>
					<Grid item xs={12} sm={6} md={3}>
						<BannerItem
							Icon={Wallet}
							heading="Set up your wallet"
							content="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support."
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<BannerItem
							Icon={Collections}
							heading="Create your collection"
							content="Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
						/>
					</Grid>

					<Grid item xs={12} sm={6} md={3}>
						<BannerItem
							Icon={Picture}
							heading="Add your NFTs"
							content="Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
						/>
					</Grid>

					<Grid item xs={12} sm={6} md={3}>
						<BannerItem
							Icon={Cart}
							heading="List them for sale"
							content="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
						/>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default BannerComponent;
