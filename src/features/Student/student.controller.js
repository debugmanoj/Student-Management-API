import Student from "./student.model.js";

const createStudentController = (data) => {

    Student.create(data)
}

export {
    createStudentController
}