#!/usr/bin/env ts-node

import crypto from "crypto";
import { Transform } from "stream";

import { ENCRYPTION, KEY, IV } from "../config";

export const decrypt = new Transform({
  transform: (chunk, encoding, next) => {
    const decipher = crypto.createDecipheriv(ENCRYPTION, KEY, IV);

    const decrypted = Buffer.concat([decipher.update(chunk), decipher.final()]);

    next(null, decrypted);
  },
});
