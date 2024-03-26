const express = require('express');

const app = express();

const ExpressError = require('./expressError');
const { findMode, findMean, findMedian, validateNums } = require('./helpers');

app.get('/mean', function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    let numString = req.query.nums.split(',');
    let nums = validateNums(numString);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mean',
        result: findMean(numString),
    };

    return res.send(result);
});

app.get('/mode', function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    let numString = req.query.nums.split(',');
    let nums = validateNums(numString);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mean',
        result: findMode(numString),
    };

    return res.send(result);
});

app.get('/median', function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    let numString = req.query.nums.split(',');
    let nums = validateNums(numString);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mean',
        result: findMedian(numString),
    };

    return res.send(result);
});

app.use(function (req, res, next) {
    const err = new ExpressError('Not Found', 404);

    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message,
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
});
