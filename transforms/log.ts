#!/usr/bin/env ts-node

import { Transform } from "stream";

export const createLogger = (service: string) => (message: string) => {
  return new Transform({
    transform: (chunk, encoding, next) => {
      process.stdout.write("---\n");
      process.stdout.write(`[${service}] message: ${message}\n`);
      process.stdout.write(`[${service}] data: ${chunk}\n`);

      next(null, chunk);
    },
  });
};

export const log = createLogger("log");
