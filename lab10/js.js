class Person {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return `Ім'я: ${this.name}`;
    }
}

class Course {
    constructor(title) {
        this.title = title;
        this.students = [];
    }

    addStudent(student) {
        if (!this.students.includes(student)) {
            this.students.push(student);
            student.courses.push(this);
        }
    }

    getStudents() {
        return this.students.map(s => s.name);
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    viewCourses() {
        return this.courses.map(c => c.title);
    }
}

const js = new Course("JavaScript");
const html = new Course("HTML & CSS");

const teacher = new Teacher("Ігор Тупичак");
teacher.addCourse(js);
teacher.addCourse(html);

const s1 = new Student("Назар");
const s2 = new Student("Давид");

js.addStudent(s1);
js.addStudent(s2);
html.addStudent(s1);

console.log(teacher.getInfo());
console.log("Курси викладача:", teacher.courses.map(c => c.title));

console.log(s1.getInfo());
console.log("Курси студента:", s1.viewCourses());

console.log("Студенти на курсі JavaScript:", js.getStudents());
