class Student {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.school = "RUET"
    }
}
const student1 = new Student(1, 'Sakib')
const student2 = new Student(2, 'Riad')
const student3 = new Student(29, 'Bappi')
console.log(student1.id, student2['school'], student3)