import { Grid, Box, Container } from "@mui/material";
import FooterLogoComponent from "./FooterLogoComponent";
import FooterMailing from "./FooterMailing";
import FooterLinks from "./FooterLinks";

const Footer = () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					padding: 4,
					mt: 8,
					background: "rgba(0,0,0,0.1)"
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={3} sx={{ my: 2, width: "100%", mx: "0" }}>
						<Grid item xs={12} sm={6} md={4}>
							<FooterLogoComponent />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FooterLinks />
						</Grid>
						<Grid item xs={12} md={4}>
							<FooterMailing />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
