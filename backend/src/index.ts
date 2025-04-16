import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { createServer } from "http";
import appRouter from "./router";
import cors from "cors";
import { appConfig } from "./appConfig";

const { hostname, port } = appConfig;

const handle = createHTTPHandler({
  router: appRouter,
  middleware: cors(),
});

const server = createServer((req, res) => {
  handle(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
