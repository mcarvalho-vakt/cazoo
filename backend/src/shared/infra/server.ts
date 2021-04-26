import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from 'mongoose';
import { DB_URL, DB_URL_DEV, MONGO_OPTIONS } from '@config/database';
import AppError from '@shared/errors/AppError';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import morgan from "morgan";

import '@shared/container';

//Swagger Config
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "Cazoo library api"
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: ['./src/modules/cars/infra/http/routes/*.ts']
}

const specs = swaggerJsDoc(options);

// DB Connection
mongoose.connect(DB_URL, MONGO_OPTIONS).then(() => {
    console.log('Connected to mongodb');
},
(error) => {
    console.log('Error trying to connect to mongodb: ', error.message);
});

// Express
const app = express();

app.use('/api-docs',  swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=> {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
})

app.listen(3001, () => {
    console.log('Server started on port 3001');
})
