class Student {
    name: string;
    studentID: number;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 0;
    }

    generateStudentID(): number {
        return Math.floor(10000 + Math.random() * 90000);
    }

    enroll(course: string): void {
        this.courses.push(course);
        this.balance += 500;  // Let's say each course costs $500
    }

    viewBalance(): number {
        return this.balance;
    }

    payTuition(amount: number): void {
        this.balance -= amount;
    }

    showStatus(): object {
        return {
            'Name': this.name,
            'ID': this.studentID,
            'Courses': this.courses,
            'Balance': this.balance
        };
    }
}

// Usage:
let student = new Student("John Doe");
student.enroll("Math");
student.enroll("Science");
console.log(student.showStatus());
student.payTuition(500);
console.log(student.showStatus());
