import { resolvers as studentResolvers } from "../features/Student/index.js";


const resolvers = {

    Query: {
        ...studentResolvers.Query,
    },

    Mutation: {
        ...studentResolvers.Mutation,

    }

};

export default resolvers;