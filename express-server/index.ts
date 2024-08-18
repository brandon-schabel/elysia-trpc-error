import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";

const t = initTRPC.create({ isDev: true });
const procedure = t.procedure;

const trpcRouter = t.router({
	greeting: procedure
		.input(z.string())
		.query(({ input }) => `Hello, ${input}!`),
	test: procedure.query(() => "test"),
});

export type TrpcRouter = typeof trpcRouter;

const app = express();

app.use(cors());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: trpcRouter,
		createContext: () => ({}),
		onError: ({ error, path, type }) => {
			console.log("Error:", error);
			console.log("Path:", path);
			console.log("Type:", type);
		},
	}),
);

// Start the server
const port = Number(process.env.PORT || 3000);

console.log("Server running in development mode");
console.log(`Server running on http://localhost:${port}`);
