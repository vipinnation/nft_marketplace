import { useState } from "react";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { BootstrapInput } from "../styles/styledComponents";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

function getStyles(name, input, theme) {
	return {
		fontWeight:
			input.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium
	};
}

const SelectMultipleComponent = ({ options, name }) => {
	const [input, setInput] = useState([]);
	const theme = useTheme();

	const handleChange = (event) => {
		const {
			target: { value }
		} = event;
		setInput(typeof value === "string" ? value.split(",") : value);
	};
	return (
		<div>
			<FormControl
				sx={{
					minWidth: 120,
                    maxWidth: 500,
					mr: 1,
					"& .MuiInputBase-input": {
						padding: "10px 26px 10px 12px",
						transition: theme.transitions.create(["border-color", "box-shadow"])
					}
				}}
				variant="outlined"
			>
				<InputLabel id={`${name}-multiple-input`}>{name}</InputLabel>
				<Select
					labelId={`${name}-multiple-input`}
					id={`${name}-input-select`}
					multiple
					value={input}
					onChange={handleChange}
					label={name}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value) => (
								<Chip
									key={value}
									label={value}
									sx={{
										background: (theme) =>
											`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
									}}
								/>
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{options.map((option) => (
						<MenuItem
							key={option}
							value={option}
							style={getStyles(option, input, theme)}
						>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectMultipleComponent;
