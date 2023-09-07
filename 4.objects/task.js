function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined) {
        let arr = this.marks;
        this.marks = [...arr, ...marks];
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined) {
        return 0;
    } else if (this.marks.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (i = 0; i < this.marks.length; i++) {
            sum = sum + this.marks[i];
        }
        return sum / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}