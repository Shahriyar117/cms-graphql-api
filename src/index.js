import * as dotenv from "dotenv";
import express from "express";
import schema from "./schema.js";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at ${PORT}`);
});
