import { Typography } from "@mui/material";

const BannerItem = ({ Icon, heading, content }) => {
	return (
		<>
			<Icon />
			<Typography
				variant="body1"
				fontWeight="bold"
				paddingTop={2}
				paddingBottom={1}
			>
				{heading}
			</Typography>
			<Typography variant="body2" textAlign="justify">
				{content}
			</Typography>
		</>
	);
};

export default BannerItem;
