import { Grid, Box, Typography, Button } from "@mui/material";
import Lines from "../public/lines.svg";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import HomePageCard from "./HomePageCard";

const HeroContent = () => {
	const theme = useTheme();

	return (
		<>
			<Grid container spacing={12}>
				<Grid item xs={12} md={6}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "100%",
							minHeight: "400px",
							position: "relative"
						}}
					>
						{/* BG COLORED FILTER */}
						<Box
							sx={{
								position: "absolute",
								left: "37.22%",
								right: "3.82%",
								top: "-0.93%",
								bottom: "81.83%",
								background: "#5E83D2",
								opacity: "1",
								filter: " blur(509px)"
							}}
						></Box>
						<Box
							sx={{
								position: "absolute",
								left: "6.81%",
								right: "23.82%",
								top: "9.91%",
								bottom: "67.62%",
								background: "#F72DB1",
								opacity: "0.8",
								filter: " blur(509px)"
							}}
						></Box>

						<Box>
							<Typography variant="body1"> Discover</Typography>
							<Lines />
						</Box>
						<Box>
							<Typography variant="h4" fontWeight="bold" mb={2}>
								Discover, and collect rare{" "}
								<Typography
									variant="h4"
									component="span"
									fontWeight="bold"
									sx={{
										fontWeight: "bolder",
										background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 110%)`,
										WebkitBackgroundClip: "text",
										backgrounClip: `text`,
										textFillColor: `transparent`
									}}
								>
									{" "}
									Digital Art NFTs
								</Typography>
							</Typography>
							<Typography variant="h6">
								Digital marketplace for crypto collectibles and non-fungible
								tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
							</Typography>
						</Box>
						<Box>
							<Link href="/create-nft">
								<a>
									<Button
										color="white"
										sx={{
											py: 2,
											px: 8,
											fontWeight: "bolder",
											borderRadius: 5,
											minWidth: "200px",
											background: (theme) =>
												`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
										}}
									>
										Explore Now
									</Button>
								</a>
							</Link>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					 
				</Grid>
			</Grid>
		</>
	);
};

export default HeroContent;
