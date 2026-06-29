import Student from "./student.model.js";
import { createStudentController, getAllStudentsController, getSingleStudentController, searchStudentController,studentsByDepartmentController } from "./student.controller.js"

const StudentResolvers = {
    Query: {
        students: async () => {

            return await getAllStudentsController();

        },
        getSingleUser: async (_, args) => {

            return await getSingleStudentController(args)
        },
        searchStudent: async (_, args) => {
            return await searchStudentController(args)

        },
        studentsByDepartment: async (_,args) => {
            return await studentsByDepartmentController(args)

        }
    },

    Mutation: {
        createStudent: async (_, { input }) => {
            return await createStudentController(input);
        },
        updateStudent: (_, args) => {

        },
        DeleteStudent: (_, args) => {

        }
    }
};

export default StudentResolvers;