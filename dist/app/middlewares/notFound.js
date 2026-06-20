import httpStatus from "http-status";
const notFound = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'API NOT FOUND',
        error: {
            path: req.originalUrl,
            message: 'You requested a URL that does not exist',
            statusCode: httpStatus.NOT_FOUND
        }
    });
};
export default notFound;
