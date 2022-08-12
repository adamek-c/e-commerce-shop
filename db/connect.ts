import mongoose from "mongoose";

const connect = (connectionDB: string) =>
	mongoose.connect(connectionDB, () => {
		console.log("connected to database");
	});

export default connect;
