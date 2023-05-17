import { Request, Response, NextFunction } from 'express';

import { CustomError } from '@server/utils/custum-error';

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (!err.HttpStatusCode) {
        return res.status(err.HttpStatusCode || 500).json({
            status: false,
            errorMessage: err.message || 'Server error',
        });
    } else {
        return res.status(err.HttpStatusCode).json(err.JSON);
    }
};