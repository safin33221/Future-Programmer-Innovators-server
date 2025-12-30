import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';



import cookieParser from 'cookie-parser'
import envConfig from './config/env.config';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';



const app: Application = express();


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

//parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "Server is running..",
        environment: envConfig.node_env,
        uptime: process.uptime().toFixed(2) + " sec",
        timeStamp: new Date().toISOString()
    })
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;