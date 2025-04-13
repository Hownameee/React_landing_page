import { createTRPCClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCClient({
  links: [
    httpBatchLink({
      url: "http://127.0.0.1:4000/",
    }),
  ],
});

// const res = await trpc.greet.query('John');
// console.log(res.greeting)