import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const FooterLogoComponent = () => {
	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Box sx={{ mb: 2 }}>
					<Image src="/logo.svg" height={60} width={60} />
					<Typography variant="body1" sx={{ fontWeight: "bolder" }}>
						NFT Marketplace
					</Typography>
				</Box>
				<Box>
					<Typography variant="body2">
						The digital marketplace for crypto
						collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
						exclusive digital items.
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							mt: 2
						}}
					>
						<Link href="/">
							<a>
								<FacebookRoundedIcon color="primary" sx={{ mr: 2 }} fontSize='large' />
							</a>
						</Link>
						<Link href="/">
							<a>
								<GitHubIcon color="primary" sx={{ mr: 2 }} fontSize='large' />
							</a>
						</Link>
						<Link href="/" >
							<a>
								<TwitterIcon color="primary" sx={{ mr: 2 }} fontSize='large'/>
							</a>
						</Link>
					</Box>
					<Typography variant="caption">
						© 2022 NFT All Rights Reserved
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default FooterLogoComponent;
