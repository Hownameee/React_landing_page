import { initTRPC } from "@trpc/server";
import { z } from 'zod'

const t = initTRPC.create();

const appRouter = t.router({
  get: t.procedure
    .input((val) => val)
    .query(({ input }) => ({ greeting: "Hello world!!" })),
  post: t.procedure
    .input(z.string())
    .query(({ input } : { input: string }) => ({ greeting: input.toUpperCase() })),
});

export default appRouter;
