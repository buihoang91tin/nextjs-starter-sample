import { initTRPC } from '@trpc/server';
import { Context } from './context';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  hello: t.procedure.query(() => 'Hello 2, tRPC!'),
  getPosts: t.procedure.query(async () => {
    return await prisma.post.findMany({
      include: {
        featured: true, // Include the featured details
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
