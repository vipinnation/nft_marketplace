import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SingleCategoryHomePage from "./SingleCategoryHomePage";

const data = [
	{
		id: 1,
		title: "World of Women Galaxy",
		creator: "0x1234567891235",
		price: 0.218,
		image: "/nftSample.png"
	},
	{
		id: 2,
		title: "Azuki #958",
		price: 0.218,
		creator: "0x1234567891235",
		image: "/nftSample.png"
	},
	{
		id: 3,
		title: "Yolk Folks",
		price: 0.218,
		creator: "0x1234567891235",
		image: "/nftSample.png"
	},
	{
		id: 4,
		title: "Earth Mooncake",
		price: 0.218,
		creator: "0x1234567891235",
		image: "/nftSample.png"
	},
	{
		id: 5,
		title: "Corrupt Floppy Disk",
		price: 0.218,
		creator: "0x1234567891235",
		image: "/nftSample.png"
	},
	{
		id: 6,
		price: 0.218,
		creator: "0x1234567891235",
		title: "Ape Episode #128",
		image: "/nftSample.png"
	},
	{
		id: 7,
		title: "Neo R #028",
		price: 0.218,
		creator: "0x1234567891235",
		image: "/nftSample.png"
	},
	{
		id: 8,
		price: 0.218,
		creator: "0x1234567891235",
		title: "Yact Mutant Academy",
		image: "/nftSample.png"
	}
];

const categories = [
	"All Categories",
	"Art",
	"Photography",
	"Gaming",
	"Sport",
	"Music",
	"Anime"
];

function TabPanel(props) {
	const { children, value, index, category, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<SingleCategoryHomePage
					data={data}
					value={value}
					index={index}
					category={category}
				/>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}

const CategoryMenu = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Box
					sx={{
						mb: 6
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						textColor="primary"
						indicatorColor="secondary"
						variant="scrollable"
						selectionFollowsFocus
						sx={{
							"& 	.MuiTabs-indicator": {
								display: "none"
							}
						}}
					>
						{categories.map((category, index) => (
							<Tab
                                key={index}
								disableRipple
								label={category}
								{...a11yProps(index)}
								sx={{
									color: "text.primary",
									fontSize: "14px",
									fontWeight: "bold",
									textTransform: "capitalize",
									"&.MuiTab-root": {
										background: "rgba(220, 220, 220, 0.2)",
										borderRadius: 12,
										mr: 2,
										"&:hover": {
											background: (theme) => theme.palette.secondary.main,
											opacity: 1
										}
									},
									"&.Mui-selected": {
										background: (theme) =>
											`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                                        color: (theme) => theme.palette.text.primary
                                        },
									"&.Mui-selected:hover": {
										background: (theme) =>
											`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
										opacity: 1
									}
								}}
							/>
						))}
					</Tabs>
				</Box>
				{categories.map((category, index) => (
					<TabPanel
						key={index}
						category={category}
						value={value}
						index={index}
					></TabPanel>
				))}
			</Box>
		</>
	);
};

export default CategoryMenu;
