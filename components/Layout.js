import Footer from "./Footer/index";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
