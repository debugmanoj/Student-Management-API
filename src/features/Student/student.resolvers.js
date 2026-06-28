const StudentResolvers = {
    Query: {
        students: () => {
            return [
                {
                    id: 1,
                    name: "John",
                    email: "john@gmail.com"
                }
            ];
        },
        getSingleUser: (_, args) => {
            console.log('args: ', args)
            return {
                id: 2,
                name: "manoj"
            };
        },
        searchStudent: (_, args) => {
            console.log('args: ', args)
            return {
                id: 2,
                name: "manoj"
            };
        }
    },

    Mutation: {
        createStudent: (_, args) => {
            console.log("args", args)

        },
        updateStudent: (_, args) => {
            console.log("args", args)
        },
        DeleteStudent: (_, args) => {
            console.log("args", args)
        }
    }
};

export default StudentResolvers;