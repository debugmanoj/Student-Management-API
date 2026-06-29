import Student from "./student.model.js";
import { createStudentController,getAllStudents,getSingleStudent } from "./student.controller.js"

const StudentResolvers = {
    Query: {
        students: async () => {

            return await getAllStudents();

        },
        getSingleUser: async(_, args) => {
            
            return await getSingleStudent(args)
        },
        searchStudent: (_, args) => {
            
            return {
                id: 2,
                name: "manoj"
            };
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