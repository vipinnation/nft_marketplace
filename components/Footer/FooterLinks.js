import { Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const FooterLinks = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: ["space-between", "space-around"],
				width: "100%"
			}}
		>
			<Box>
				<Typography
					variant="body1"
					mb={2}
					sx={{
						fontWeight: "bolder",
						background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%)`,
						WebkitBackgroundClip: "text",
						backgrounClip: `text`,
						textFillColor: `transparent`
					}}
				>
					Market Place
				</Typography>
				<Stack direction="column" justifyContent="center">
					<Link href="/explore">
						<a>
							<Typography
								variant="body2"
								mb={1}
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								All NFTs
							</Typography>
						</a>
					</Link>
					<Link href="/categories/art">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Art
							</Typography>
						</a>
					</Link>
					<Link href="/categories/sports">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Sports
							</Typography>
						</a>
					</Link>

					<Link href="/categories/music">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Music
							</Typography>
						</a>
					</Link>
					<Link href="/categories/anime">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Anime
							</Typography>
						</a>
					</Link>
					<Link href="/categories/games">
						<a>
							<Typography
								variant="body2"
								mb={1}
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Games
							</Typography>
						</a>
					</Link>
					<Link href="/categories/photography">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Photography
							</Typography>
						</a>
					</Link>
					<Link href="/categories/trading_cards">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Trading Cards
							</Typography>
						</a>
					</Link>
				</Stack>
			</Box>

			<Box>
				<Typography
					variant="body1"
					mb={2}
					sx={{
						fontWeight: "bolder",
						background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%)`,
						WebkitBackgroundClip: "text",
						backgrounClip: `text`,
						textFillColor: `transparent`
					}}
				>
					Quick Links
				</Typography>
				<Stack direction="column" justifyContent="center">
					<Link href="/explore">
						<a>
							<Typography
								variant="body2"
								mb={1}
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Explore
							</Typography>
						</a>
					</Link>
					<Link href="/create">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Create
							</Typography>
						</a>
					</Link>
					<Link href="/dashboard">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Dashboard
							</Typography>
						</a>
					</Link>

					<Link href="/my-nfts">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								My NFT's
							</Typography>
						</a>
					</Link>
					<Link href="/about">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								About
							</Typography>
						</a>
					</Link>
					<Link href="/profile">
						<a>
							<Typography
								variant="body2"
								mb={1}
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Profile
							</Typography>
						</a>
					</Link>
					<Link href="/blog">
						<a>
							<Typography
								mb={1}
								variant="body2"
								color="inherit"
								sx={{ "&:hover": { textDecoration: "underline" } }}
							>
								Blog
							</Typography>
						</a>
					</Link>
				</Stack>
			</Box>
		</Box>
	);
};

export default FooterLinks;
