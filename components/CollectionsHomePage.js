import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import CollectionItem from "./CollectionItem";
import CollectionsGrid from "./CollectionsGrid";

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

const CollectionsHomePage = () => {
	return (
		<>
			<Box
				sx={{
					my: [5,5,10],
					py: 5
				}}
			>
				<Container maxWidth="lg">
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							mb: 6
						}}
					>
						<Typography variant="h3" fontWeight="bold">
							Top collections
						</Typography>
						<Link href="/collections">
							<a>
								<Typography
									variant="body2"
									sx={{
										fontWeight: "bolder",
										background: (theme) =>
											`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 110%)`,
										WebkitBackgroundClip: "text",
										backgrounClip: `text`,
										textFillColor: `transparent`
									}}
								>
									View All
								</Typography>
							</a>
						</Link>
					</Box>
					<CollectionsGrid>
						{data.map((item) => (
							<CollectionItem key={item.id} {...item} />
						))}
					</CollectionsGrid>
				</Container>
			</Box>
		</>
	);
};

export default CollectionsHomePage;
