import useScrollTrigger from "@mui/material/useScrollTrigger";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function ColorScroll(props) {
	const [offset, setOffset] = useState();
	const router = useRouter();
	useEffect(() => {
		const heroContent = document.getElementById("hero-content");
		if (heroContent) {
			setOffset(heroContent.offsetHeight + heroContent.offsetTop);
		}
	}, [router.pathname]);
	const isHome = router.pathname === "/";

	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: offset
	});

	return React.cloneElement(children, {
		color: trigger && isHome ? "bg" : "transparent",
		sx: {
			boxShadow:
				trigger &&
				isHome &&
				"0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
			backdropFilter: isHome ? "blur(15px)" : "none"
		}
	});
}

export default ColorScroll;
