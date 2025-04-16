import { initTRPC } from "@trpc/server";
import { z } from 'zod'

const t = initTRPC.create();

const appRouter = t.router({
  get: t.procedure
    .input((val) => val)
    .query(({ input }) => ({ data: "Great!!" })),
  post: t.procedure
    .input(z.string())
    .query(({ input } : { input: string }) => ({ data: input.toUpperCase() })),
});

export default appRouter;
