import { resolvers as studentResolvers } from "../features/Student/index.js";


const resolvers = {
    ...(studentResolvers.StudentResponse ? { StudentResponse: studentResolvers.StudentResponse } : {}),
    Query: {
        ...studentResolvers.Query,
    },

    Mutation: {
        ...studentResolvers.Mutation,

    }

};

export default resolvers;