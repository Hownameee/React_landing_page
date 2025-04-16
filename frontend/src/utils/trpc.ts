import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { appConfig } from "../../../backend/src/appConfig";

const { hostname, port }: { hostname: string; port: number } = appConfig;
console.log(`http://${hostname}:${port}/`)

export const trpc = createTRPCClient({
  links: [
    httpBatchLink({
      url: `http://${hostname}:${port}/`,
    }),
  ],
});

// const res = await trpc.greet.query('John');
// console.log(res.greeting)
