const validateRequest = (schema) => (req, res, next) => {
    schema.parse({
        body: req.body,
    });
    next();
};
export default validateRequest;
