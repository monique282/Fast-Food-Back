import express, { json, Request, Response, Express } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import cors from "cors";
import { ProductRouter, RequestRouter } from "./routers";
import { CodeRouter } from "./routers/routerCode";
import { RequestReady } from "./routers/routerReady";
import { handleApplicationErrors } from "./middlewares";
import { loadEnv } from "./config/envs";



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
.get('/request', RequestRouter)
.post('/request', RequestRouter)
.post('/update', CodeRouter)
.post('/updateReady', RequestReady)
.post('/updateError',RequestRouter)
.delete('/updateDelete',RequestRouter)
.use(handleApplicationErrors)


export default app;