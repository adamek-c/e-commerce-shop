import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface BooksState {
	id: string;
	title: string;
	rated?: number;
	img: string;
	price: number;
}

const Books: FC<BooksState> = ({ title, rated, img, price }) => {
	return (
		<Link
			to=":id"
			className="bg-neutral-100 flex flex-col cursor-pointer rounded-xl max-w-sm"
		>
			<img src={img} alt={title} className="p-8 mx-auto w-full block" />

			<div className="p-8 pt-0 text-xl capitalize bg-neutral-200 rounded-b-xl mt-auto">
				<h2 className="pt-8 mb-3">{title}</h2>
				<span className="font-bold">{price} PLN</span>

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
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
						}
					/>
					<Box sx={{ ml: 2 }}>{rated}</Box>
				</Box>
			</div>
		</Link>
	);
};

export default Books;
