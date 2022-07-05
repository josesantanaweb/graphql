import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { AuthorResolver } from "./modules/author/author.resolver";
import UserRoute from "./routes/users";
import AuthRoute from "./routes/auth";
// import { authorRouter } from "./modules/author/author.router";

import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const main = async () => {
  const PORT: number = parseInt(process.env.PORT as string, 10);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthorResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  await apolloServer.start();
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/users", UserRoute);
  app.use("/api/auth", AuthRoute);
  // app.use("/api/authors", authorRouter);

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
});
