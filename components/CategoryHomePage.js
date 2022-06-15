import { Container, Typography } from "@mui/material";
import CategoryMenu from "./CategoryMenu";

const CategoryHomePage = () => {
	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					p: 2
				}}
			>
				<Typography variant="h3" fontWeight="bold" marginBottom={6}>
					Discover more NFTs
				</Typography>
				<CategoryMenu />
			</Container>
		</>
	);
};

export default CategoryHomePage;
