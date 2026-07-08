import { typeDefs as studentTypeDef } from "../features/Student/index.js";
import { typeDefs as errorTypeDefs } from "../shared/errors/errors.typeDefs.js";

const typeDefs = [
    errorTypeDefs,
    studentTypeDef,
];

export default typeDefs;