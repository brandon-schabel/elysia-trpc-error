# Elysia tRPC Issue Demonstration

This repository demonstrates an issue with the current version of Elysia tRPC. It contains three main components:

- `@elysia-server`: An Elysia-based server implementation
- `@express-server`: An Express-based server implementation
- `@client`: A client application

## Issue Description

The Elysia-based server implementation is currently experiencing issues with tRPC integration. This repository allows you to compare the behavior between the Elysia and Express implementations.

## Switching Between Servers

To switch between the Elysia and Express servers, update this line to switch between servers:

- For Elysia server: `import type { TrpcRouter } from '@elysia-server/index.ts'`
- For Express server: `import type { TrpcRouter } from '@express-server/index.ts'`

## Notes

- The Express server implementation works correctly.
- The Elysia server implementation is currently experiencing issues with tRPC - in this specific case it can't seem to find the procedures.
