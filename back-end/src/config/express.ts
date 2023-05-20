import express from 'express';
import routes from '@server/api/v1/routes';
import morgan from 'morgan';
import cors from 'cors';
// import connectDB from '../database/mongodb';

const createServer = (): express.Application => {
    const app = express();
    app.use(cors());
    app.disable('etag');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.disable('x-powered-by');

    app.get('/hello', (_req, res) => {
        res.send('UP');
    });

    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/api', routes);


    return app;
};

export { createServer };