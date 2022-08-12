import { Request, Response } from "express";

const routeNotFound = (req: Request, res: Response) =>
	res.status(404).json("Unknow");

export default routeNotFound;
