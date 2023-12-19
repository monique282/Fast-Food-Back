import express, { json, Request, Response } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import cors from "cors";
import { loadEnv } from "./config/envs";
import { ProductRouter } from "./routers";
import { CodeRouter } from "./routers/routerCode";

loadEnv();
const app = express();

app
.use(json())
.use(cors())
.get("/health", (req: Request, res: Response) => {
    return res.status(httpStatus.OK).send("Ok running! ");
})
.get('/home', ProductRouter)
.get('/code', CodeRouter)

export default app;