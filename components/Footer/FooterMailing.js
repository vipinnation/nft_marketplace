import { Box, Button, InputBase, Link, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const FooterMailing = () => {
	const theme = useTheme();
	return (
		<>
			<Typography
				variant="body1"
				sx={{
					fontWeight: "bolder",
					background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%)`,
					WebkitBackgroundClip: "text",
					backgrounClip: `text`,
					textFillColor: `transparent`,
					mb: 2,                    
				}}
			>
				Stay in the loop
			</Typography>
			<Typography variant="body2">
				Join our mailing list to stay in the loop with our newest feature
				releases, NFT drops, and tips and tricks for navigating NFTs.
			</Typography>
			<Box
				sx={{
                    mt:3,
					height: [, , "60px"],
                    maxWidth : "500px",
					width: ["100%", "50%", "100%"],
					position: "relative",
					background: "white",
					display: "flex",
					flexDirection: ["column", "column", "row"],
					borderRadius: `${theme.shape.borderRadius * 5}px`,
					backgroundOrigin: "border-box",
					backgroundClip: "content-box , border-box",
					border: "1px solid transparent",
					backgroundImage: `linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`
				}}
			>
				<InputBase
					sx={{
                        fontSize: ['initial','initial','small', 'initial'],
						color: "inherit",
						width: "100%",
						"& .MuiInputBase-input": {
							paddingLeft: [
								`${theme.spacing(4)}`,
								`${theme.spacing(4)}`,
								`${theme.spacing(2)}`
							],
                            paddingRight: 1,
							py: [1, 1, 0],
							transition: theme.transitions.create("width"),
							width: "100%"
						}
					}}
					placeholder="Enter your email"
				/>
				<Button
					sx={{
						padding: (0, 2),
						height: "100%",
						display: "flex",
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: `${theme.shape.borderRadius * 5}px`,
						background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%)`
					}}
					color="white"
				>
					Subscibe Now
				</Button>
			</Box>
		</>
	);
};

export default FooterMailing;
