import express from "express";
import connect from "./db/connect";

const connectionDB = process.env.MONGO_URI as string;
const port = process.env.PORT || 5000;
const app = express();

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
