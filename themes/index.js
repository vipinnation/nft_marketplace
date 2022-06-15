import { createTheme } from "@mui/material/styles";
import darkScrollbar from "@mui/material/darkScrollbar";

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#0A1929",
			paper: "#0A1929"
		},
		primary: {
			main: "#2081e2"
			// light: "#73E0A9"
		},
		bg: {
			main: "#0A1929"
		},
		secondary: {
			main: "#F72DB1",
			light: "#FB95D7"
		},
		white: {
			main: "#ffffff"
		},
		success: {
			main: "#66bb6a",
			light: "rgba(102, 187, 106, 0.16)"
		},
		warning: {
			main: "#ffa726",
			light: "rgba(255, 167, 38, 0.16)"
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					...darkScrollbar()
				}
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "none"
					// "&:hover": {
					// 	color: "#fff"
					// }
				}
			}
		},
		MuiSkeleton: {
			defaultProps: {
				animation: "pulse",
				variant: "rectangular"
			},
			styleOverrides: {
				root: {
					backgroundColor: "rgba(0, 0, 0, 0.3)"
				}
			}
		}
	},

	typography: {
		fontFamily: ["Montserrat", "DM Sans", "sans-serif"].join(","),
		h1: {
			fontFamily: "Montserrat",
			fontSize: "3.8rem"
		},
		h2: {
			fontFamily: "Montserrat",
			fontSize: "3rem"
		},
		h6: {
			fontFamily: "Montserrat",
			fontSize: "1.125rem"
		},
		h5: {
			fontFamily: "Montserrat",
			fontSize: "1.6rem",
			fontWeight: 600
		},
		h4: {
			fontSize: "2rem",
			fontFamily: "Montserrat"
		},
		h3: {
			fontFamily: "Montserrat",
			fontSize: "2.5rem"
		},
		subtitle1: {
			fontFamily: "DM Sans",
			fontSize: "1.125rem"
		},
		subtitle2: {
			fontFamily: "DM Sans",
			fontSize: "0.625rem"
		},
		body1: {
			fontFamily: "DM Sans",
			fontSize: "1.125rem"
		},
		body2: {
			fontFamily: "DM Sans",
			fontSize: "0.875rem"
		},
		button: {
			fontFamily: "DM Sans"
		},
		caption: {
			fontFamily: "DM Sans",
			color: "rgba(255,255,255,0.5)"
		},
		overline: {
			fontFamily: "DM Sans"
		}
	},
	shape: {
		borderRadius: 8
	}
});

export default theme;
