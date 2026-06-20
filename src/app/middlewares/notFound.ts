import { NextFunction, Request, Response } from "express";
import path from "node:path";
import httpStatus from "http-status";



const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'API NOT FOUND',
        error: {
            path: req.originalUrl,
            message: 'You requested a URL that does not exist',
            statusCode: httpStatus.NOT_FOUND
        }
    })
}

export default notFound;