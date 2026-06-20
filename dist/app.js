import express from 'express';
import cors from 'cors';
import config from "./config/index.js";
import notFound from "./app/middlewares/notFound.js";
import globalErrorHandler from "./app/middlewares/globalErrorhandler.js";
import router from "./app/routes/index.js";
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`server is running port${config.port}`);
});
//application routes
app.use('/api/v1', router);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
