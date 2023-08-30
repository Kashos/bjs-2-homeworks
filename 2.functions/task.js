function getArrayParams(...arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    let generalNumber = sum / arr.length;
    generalNumber = generalNumber.toFixed(2);
    avg = parseFloat(generalNumber);
    return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let min = arr[0];
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        let dif = max - min;
        return dif;
    }
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sumEvenElement = 0;
        let sumOddElement = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEvenElement = sumEvenElement + arr[i];
            } else {
                sumOddElement = sumOddElement + arr[i];
            }
        }
        let dif = sumEvenElement - sumOddElement;
        return dif;
    }
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sumEvenElement = 0;
        let countEvenElement = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEvenElement = sumEvenElement + arr[i];
                countEvenElement++;
            }
        }
        let generalNumber = sumEvenElement / countEvenElement;
        generalNumber = generalNumber.toFixed(2);
        let avg = parseFloat(generalNumber);
        return avg;
    }
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let result = [];
    for (let i = 0; i < arrOfArr.length; i++) {
        result[i] = func(...arrOfArr[i]);
        if (result[i] > maxWorkerResult) {
            maxWorkerResult = result[i];
        }
    }
    return maxWorkerResult;
}
