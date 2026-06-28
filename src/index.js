import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";


dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

const server = new ApolloServer({
	typeDefs,
	resolvers
})


await server.start();

app.use("/graphql",expressMiddleware(server))


app.listen(process.env.PORT || 4000, function () {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});