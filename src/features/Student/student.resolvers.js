import Student from "./student.model.js";
import {
    createStudentController,
    getAllStudentsController,
    getSingleStudentController,
    searchStudentController,
    studentsByDepartmentController,
    topStudentsController,
    updateStudentController,
    deleteStudentController
} from "./student.controller.js"

const StudentResolvers = {
    StudentResponse: {
        __resolveType(obj) {
            if (obj.__typename) {
                return obj.__typename;
            }
            if (obj.email || obj.id || obj._id) {
                return 'Student';
            }
            return null;
        }
    },
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
        studentsByDepartment: async (_, args) => {
            return await studentsByDepartmentController(args)

        },

        topStudents: async (_, args) => {
            return await topStudentsController(args)

        }
    },

    Mutation: {
        createStudent: async (_, { input }) => {
            return await createStudentController(input);
        },
        updateStudent: async(_, args) => {
            return await updateStudentController(args)
        },
        DeleteStudent: async(_, args) => {
            return await deleteStudentController(args)
        }
    }
};

export default StudentResolvers;