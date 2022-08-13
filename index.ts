import express from "express";
require("express-async-errors");
import connect from "./db/connect";
import router from "./routes/authentication";
import routerBooks from "./routes/books";
import bodyParser from "body-parser";
import routeNotFound from "./middleware/routeNotFound";
import errorHandler from "./middleware/errorHandler";
import "dotenv/config";

const connectionDB = process.env.MONGO_URI as string;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// routers
app.use("/api/v1", router);
app.use("/api/v1", routerBooks);

// display 404 page if route doesn't exist
app.use(routeNotFound);

// error default
app.use(errorHandler);

const port = process.env.PORT || 5000;

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
