#!/usr/bin/env ts-node

import crypto from "crypto";
import { Transform } from "stream";

import { ENCRYPTION, KEY, IV } from "../config";

export const encrypt = new Transform({
  transform: (chunk, encoding, next) => {
    const cipher = crypto.createCipheriv(ENCRYPTION, KEY, IV);

    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);

    next(null, encrypted);
  },
});
