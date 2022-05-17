import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { FC } from "react";

interface RatingStars {
	rated: number | undefined;
}

const StarsRating: FC<RatingStars> = ({ rated }) => {
	return (
		<Box
			sx={{
				width: 200,
				display: "flex",
				alignItems: "center",
				marginTop: "0.3rem",
			}}
		>
			<Rating
				name="text-feedback"
				value={rated}
				readOnly
				precision={0.5}
				emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
			/>
			<Box sx={{ ml: 2 }}>{rated}</Box>
		</Box>
	);
};

export default StarsRating;
