import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Arrow from "../public/arrow.svg";
import HeroContent from "./HeroContent";

const HeroComponent = () => {
	const theme = useTheme();
	return (
		<>
			<Box
				sx={{
					position: "relative",
					mb: [10, 14],
					"&::before": {
						content: '""',
						position: "absolute",
						top: -120,
						width: "100%",
						height: `calc(120px + 100%)`,
						backgroundImage: 'url("/hero-bg.png")',
						backgroundPosition: "right",
						backgroundRepeat: "no-repeat",
						opacity: 0.8,
						zIndex: -1
					}
				}}
			>
                    {/* BG COLORED FILTER */}
				<Box
					sx={{
						position: "absolute",
						left: "6.81%",
						right: "23.82%",
						top: "9.91%",
						bottom: "67.62%",
						background: "#5E83D2",
						opacity: "1",
						filter: " blur(509px)"
					}}
				></Box>
				<Box
					sx={{
						position: "absolute",
						left: "37.22%",
						right: "3.82%",
						top: "-0.93%",
						bottom: "81.83%",
						background: "#F72DB1",
						opacity: "0.2",
						filter: " blur(509px)"
					}}
				></Box>

				<Container maxWidth="lg">
					<Box
						sx={{
							mt: [2, 4, 6, 8],
							height: ["600px", "500px", "580px"],
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly"
						}}
					>
						<Box>
							<Typography variant="body2" color="text.secondary" mb={2}>
								Exclusive NFT for Digital and Real-world Assets
							</Typography>
							<Typography variant="h3" fontWeight="bold">
								Discover, collect, and sell extraordinary NFTs
							</Typography>
						</Box>

						<Box
							sx={{
								display: "flex",
								justifyContent: "start",
								flexWrap: "wrap",
								gap: 3,
								rowGap: 2
							}}
						>
							<Link href="/explore">
								<a>
									<Button
										color="white"
										sx={{
											position: "relative",
											borderRadius: theme.shape.borderRadius * 5,
											border: "1px solid transparent",
											padding: "0",
											backgroundOrigin: "border-box",
											backgroundClip: "content-box , border-box",
											backgroundImage: `linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
											minWidth: "200px"
										}}
									>
										<Box sx={{ py: 2, px: 8 }}>Explore</Box>
									</Button>
								</a>
							</Link>
							<Link href="/create">
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
										Create
									</Button>
								</a>
							</Link>
						</Box>
						<Link href="/about">
							<a>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<Typography variant="body1" color="text.primary" mr={0.5}>
										Learn more
									</Typography>
									<Arrow />
								</Box>
							</a>
						</Link>
					</Box>
				</Container>
			</Box>
			<Container
				maxWidth="lg"
				id="hero-content"
				sx={{
					mb: [6, 8, 16]
				}}
			>
				<HeroContent />
			</Container>
		</>
	);
};

export default HeroComponent;
