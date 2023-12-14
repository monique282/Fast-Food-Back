import express, { json, Request, Response } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import cors from "cors";
import { loadEnv } from "./config/envs";

loadEnv();
const app = express();

app.use(json())
app.use(cors())

app.get("/health", (req: Request, res: Response) => {
    return res.status(httpStatus.OK).send("Ok running! ");
})

export default app;