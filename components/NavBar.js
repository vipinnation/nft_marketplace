import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
	Avatar,
	CssBaseline,
	Box,
	Container,
	InputBase,
	Button,
	IconButton
} from "@mui/material";
import ColorScroll from "../utils/ColorScroll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useRouter } from "next/router";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import { styled, alpha } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const pages = [
	{ name: "Explore", link: "explore" },
	{ name: "Create", link: "create" },
	{ name: "Dashboard", link: "dashboard" }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius * 5,
	border: "1px solid transparent",
	position: "relative",
	marginRight: theme.spacing(2),
	width: "100%",
	backgroundOrigin: "border-box",
	backgroundClip: "content-box , border-box",
	backgroundImage: `linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto"
	}
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch"
		}
	}
}));

const NavBar = (props) => {
	const isAuthenticated = false;
	const router = useRouter();
	const isHome = router.pathname === "/";
	const theme = useTheme();
	const med = useMediaQuery(theme.breakpoints.up("md"));

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const[count , setCount] = React.useState(1)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<CssBaseline />
				<ColorScroll {...props}>
					<AppBar
						position={isHome ? "fixed" : "static"}
						enableColorOnDark
						color="bg"
						elevation={isHome ? 0 : 3}
					>
						<Container maxWidth="lg">
							<Toolbar>
								<Link href="/" >
									<a>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												mr: 2,
												display: { xs: "none", md: "flex" },
												ml: 1
											}}
										>
											{/* <Image src="/logo.svg" width={40} height={40} /> */}
											<Typography
												variant="h6"
												noWrap
												component="div"
												sx={{
													mr: 2,
													display: { xs: "none", md: "flex" },
													ml: 1
												}}
											>
											NFT
											</Typography>
										</Box>
									</a>
								</Link>

								<Search sx={{ display: { xs: "none", md: "flex" } }}>
									<SearchIconWrapper>
										<SearchIcon color="secondary" />
									</SearchIconWrapper>
									<StyledInputBase
										placeholder="Search Items"
										inputProps={{ "aria-label": "search" }}
									/>
								</Search>

								<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleOpenNavMenu}
										color="inherit"
									>
										<MenuIcon />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorElNav}
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "left"
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "left"
										}}
										open={Boolean(anchorElNav)}
										onClose={handleCloseNavMenu}
										sx={{
											display: { xs: "block", md: "none" }
										}}
									>
										{/* {pages.map((page) => {
											return (
												<MenuItem key={page.name} onClick={handleCloseNavMenu} >
													<Typography
														color={
															router.asPath == "/" + page.name.toLowerCase()
																? "secondary"
																: "white"
														}
														textAlign="center"
													>
														{page.name}
													</Typography>
												</MenuItem>
											);
										})} */}
										<MenuItem key={"account"} onClick={handleCloseNavMenu}>
											<Link href="my-nfts">
												<Typography
													color={
														router.asPath == "/account" ? "secondary" : "white"
													}
													textAlign="center"
												>
													Account
												</Typography>
											</Link>
										</MenuItem>
									</Menu>
								</Box>
								<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
									<Link href="/">
										<a>
											<Image src="/logo.svg" width={40} height={40} />
										</a>
									</Link>
								</Box>

								{/* <Typography
									variant="h6"
									noWrap
									component="div"
									sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
								>
									WAGMI
								</Typography> */}

								<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
									{pages.map((page) => (
										<Link href={page.link}>
											<Button
												key={page.name}
												onClick={handleCloseNavMenu}
												color={
													router.asPath == "/" + page.name.toLowerCase()
														? "secondary"
														: "white"
												}
												sx={{ my: 2, display: "block", fontWeight: "bold" }}
											>
												{page.name}
											</Button>
										</Link>
									))}
									<Button
										color="white"
										sx={{
											my: 2,
											mx: 1,
											display: "block",
											position: "relative",
											borderRadius: theme.shape.borderRadius * 5,
											border: "1px solid transparent",
											padding: "0",
											marginRight: theme.spacing(2),
											// width: "100%",
											backgroundOrigin: "border-box",
											backgroundClip: "content-box , border-box",
											backgroundImage: `linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`
										}}
									>
										<Box sx={{ padding: 0.5, paddingX: 1 }}>
											<Link href="my-nfts">Account</Link>
										</Box>
									</Button>
								</Box>

								<Box sx={{ flexGrow: 0, display: "flex" }}>
									{isAuthenticated ? (
										<Button
											color="white"
											sx={{
												my: 2,
												display: "block",
												width: "100%",
												background: (theme) =>
													`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
											}}
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center"
												}}
											>
												{/* <IconButton onClick={handleOpenUserMenu}> */}
												<AccountBalanceWalletIcon />
												{/* </IconButton> */}
												<Menu
													sx={{ mt: "45px" }}
													id="menu-appbar"
													anchorEl={anchorElUser}
													anchorOrigin={{
														vertical: "top",
														horizontal: "right"
													}}
													keepMounted
													transformOrigin={{
														vertical: "top",
														horizontal: "right"
													}}
													open={Boolean(anchorElUser)}
													onClose={handleCloseUserMenu}
												>
													{settings.map((setting) => (
														<MenuItem
															key={setting}
															onClick={handleCloseUserMenu}
														>
															<Typography textAlign="center">
																{setting}
															</Typography>
														</MenuItem>
													))}
												</Menu>
											</Box>
										</Button>
									) : (
										<Button
											color="white"
											sx={{
												my: 2,
												display: "block",
												width: "100%",
												borderRadius: 5,
												background: (theme) =>
													`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
											}}
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center"
												}}
											>
												<AccountBalanceWalletIcon sx={{ mr: [0, 0, 1] }} />
												{med && <>Connect</>}
											</Box>
										</Button>
									)}
								</Box>
							</Toolbar>
						</Container>
					</AppBar>
				</ColorScroll>
				{isHome && <Offset />}
			</Box>
		</>
	);
};

export default NavBar;
