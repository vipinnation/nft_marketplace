import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

const Sidebar = (props) => {
	const { window } = props;
	const drawer = (
		<div>
			<List sx={{ mt: "80px" }}>
				<Link href="/">
					<ListItem button sx={{ backgroundColor: "inherit" }}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
				<Link href="/">
					<ListItem button sx={{ backgroundColor: "inherit" }}>
						<ListItemIcon>
							<Inventory2Icon />
						</ListItemIcon>
						<ListItemText primary={"Products"} />
					</ListItem>
				</Link>
				<Link href="/">
					<ListItem button sx={{ backgroundColor: "inherit" }}>
						<ListItemIcon>
							<CategoryIcon />
						</ListItemIcon>
						<ListItemText primary={"Categoriess"} />
					</ListItem>
				</Link>
				<Link href="/">
					<ListItem button sx={{ backgroundColor: "inherit" }}>
						<ListItemIcon>
							<PeopleAltIcon />
						</ListItemIcon>
						<ListItemText primary={"Users"} />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List>
				<Link href="/">
					<ListItem button sx={{ backgroundColor: "inherit" }}>
						<ListItemIcon>
							<ShoppingCartIcon />
						</ListItemIcon>
						<ListItemText primary={"Orders"} />
					</ListItem>
				</Link>
				<Link href="/">
					<ListItem button sx={{ backgroundColor: "inherit" }}>
						<ListItemIcon>
							<DescriptionIcon />
						</ListItemIcon>
						<ListItemText primary={"Bills"} />
					</ListItem>
				</Link>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<Box
				component="nav"
				sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer // mobile
					container={container}
					variant="temporary"
					open={props.mobileOpen}
					onClose={props.handleDrawerToggle}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth
						}
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", md: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth
						}
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Sidebar;
