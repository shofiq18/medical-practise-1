import { Application, Request, Response } from "express";
import express from 'express';
import cors from 'cors';
import config from "./config/index.js";
import notFound from "./app/middlewares/notFound.js";
import globalErrorHandler from "./app/middlewares/globalErrorhandler.js";
import router from "./app/routes/index.js";
import { uptime } from "node:process";



const app: Application = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

//parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send({
        enviroment: process.env.NODE_ENV,
        port: config.port,
        message: 'server is running successfully',
        timestamp: new Date().toISOString(),
        uptime: (process.uptime().toFixed(2) + " seconds")
    })
})

//application routes
app.use('/api/v1', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;