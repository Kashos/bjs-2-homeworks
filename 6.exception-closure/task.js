function parseCount(count) {
    if (Number.isNaN(Number.parseFloat(count))) {
        throw new Error("Невалидное значение");
    }
    return parseFloat(count);
}

function validateCount(count) {
    try {
        return parseCount(count)
    }
    catch (error) {
        console.log(error);
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if (
            (sideA + sideB < sideC) ||
            (sideA + sideC < sideB) ||
            (sideB + sideC < sideA)
        ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        let area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        area = area.toFixed(3);
        let currentArea = parseFloat(area);
        return currentArea;
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        if (
            (sideA + sideB < sideC) ||
            (sideA + sideC < sideB) ||
            (sideB + sideC < sideA)
        ) {
            throw new Error('Треугольник не существует');
        }

        let perimeter = sideA + sideB + sideC;
        let semiPerimeter = perimeter / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
        area = area.toFixed(3);
        let currentArea = parseFloat(area);

        let triangle = {
            sideA,
            sideB,
            sideC
        };

        return triangle;
        return {
            get area() {
                return isNaN(area) ? 'Ошибка! Треугольник не существует' : currentArea;
            },
            get perimeter() {
                return perimeter;
            }
        };
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}