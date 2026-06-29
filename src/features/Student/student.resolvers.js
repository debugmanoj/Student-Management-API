import Student from "./student.model.js";
import { createStudentController, getAllStudentsController, getSingleStudentController, searchStudentController } from "./student.controller.js"

const StudentResolvers = {
    Query: {
        students: async () => {

            return await getAllStudentsController();

        },
        getSingleUser: async (_, args) => {

            return await getSingleStudentController(args)
        },
        searchStudent: async (_, args) => {
            let a = await searchStudentController(args)
            console.log('a: ', a)
            return a
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