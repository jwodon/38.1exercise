function findMode(arr) {
    const modeMap = {}; // Object to track value counts
    let maxCount = 0;
    let mode = null;

    for (const num of arr) {
        modeMap[num] = (modeMap[num] || 0) + 1; // Increment count for each value

        if (modeMap[num] > maxCount) {
            // Update mode if a new highest count is found
            maxCount = modeMap[num];
            mode = num;
        }
    }

    return mode;
}

function findMean(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

function findMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b); // Sort the array
    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        // Even number of elements
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        // Odd number of elements
        return sortedArr[middleIndex];
    }
}

function validateNums(numString) {
    let result = [];

    for (let i = 0; i < numString.length; i++) {
        let valToNumber = Number(numString[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(`'${numString[i]}' is not a number.`);
        }

        result.push(valToNumber);
    }
    return result;
}

module.exports = {
    findMean,
    findMedian,
    findMode,
    validateNums,
};
