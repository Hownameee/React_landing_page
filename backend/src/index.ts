import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { createServer } from "http";
import appRouter from "./router";
import cors from "cors";

const hostname = "127.0.0.1";
const port = 4000;

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
