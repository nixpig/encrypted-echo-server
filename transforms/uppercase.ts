#!/usr/bin/env ts-node

import { Transform } from "stream";

export const uppercase = new Transform({
  transform: (chunk, encoding, next) => {
    next(null, chunk.toString().toUpperCase());
  },
});
