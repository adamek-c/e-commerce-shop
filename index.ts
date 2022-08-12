import express from "express";
import connect from "./db/connect";
import routeNotFound from "./middleware/routeNotFound";
import errorHandler from "./middleware/errorHandler";

const connectionDB = process.env.MONGO_URI as string;
const port = process.env.PORT || 5000;
const app = express();

// display 404 page if route doesn't exist
app.use(routeNotFound);

// error default
app.use(errorHandler);

const start = async () => {
	try {
		connect(connectionDB);
		app.listen(port, async () => {
			console.log(`server run ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
