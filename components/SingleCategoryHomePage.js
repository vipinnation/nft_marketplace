import { Box, Button } from "@mui/material";
import Link from "next/link";
import CollectionsGrid from "./CollectionsGrid";
import SingleNftComponent from "./SingleNftComponent";
import { useRouter } from "next/router";

const SingleCategoryHomePage = ({ data, value, index, category }) => {
	const router = useRouter();
	return (
		<>
			<CollectionsGrid>
				{data.map((item) => (
					<SingleNftComponent key={item.id} {...item} />
				))}
			</CollectionsGrid>
			{
				// if home page then render
				router.pathname === "/" && (
					<Link href="/explore">
						<a>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									my: 8
								}}
							>
								<Button
									variant="contained"
									color="secondary"
									sx={{
										px: 10,
										py: 2,
										borderRadius: 6,
										fontWeight: "bold"
									}}
								>
									More NFTs
								</Button>
							</Box>
						</a>
					</Link>
				) 
			}
		</>
	);
};

export default SingleCategoryHomePage;
