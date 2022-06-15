import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const CollectionsGrid = ({ children }) => {
	return (
		<Box sx={{}}>
			<Grid container spacing={3}>
				{children}
			</Grid>
		</Box>
	);
};

export default CollectionsGrid;
