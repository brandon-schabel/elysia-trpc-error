import { Elysia } from "elysia";
import { trpc } from "@elysiajs/trpc";
import { cors } from "@elysiajs/cors";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const trpcInstance = initTRPC.create({ isDev: true });
const procedure = trpcInstance.procedure;

export const trpcRouter = trpcInstance.router({
	greeting: procedure
		.input(z.string())
		.query(({ input }) => `Hello, ${input}!`),
	test: procedure.query(() => "test"),
});

export type TrpcRouter = typeof trpcRouter;

console.log({ trpcRouter });
console.log("trpc def", trpcRouter._def);

const app = new Elysia()
	.use(
		trpc(trpcRouter, {
			onError: (result) => {
				console.log("Error:", result.error);
				console.log("Path:", result.path);
				console.log("Type:", result.type);
			},
		}),
	)
	.use(cors({ origin: "*" }));

const port = Number(process.env.PORT || 3000);
app.listen(port);
