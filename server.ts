#!/usr/bin/env ts-node

import net from "net";
import { encrypt, decrypt, createLogger, uppercase } from "./transforms";
import { SERVER_HOST, SERVER_PORT } from "./config";

const log = createLogger("server");

net
  .createServer((stream) => {
    stream
      .pipe(log("received chunk from stream"))
      .pipe(decrypt)
      .pipe(log("decrypted chunk from stream"))
      .pipe(log("transforming string to uppercase"))
      .pipe(uppercase)
      .pipe(log("transformed string to uppercase"))
      .pipe(encrypt)
      .pipe(log("encrypted uppercased string and piping back to stream"))
      .pipe(stream);
  })
  .listen(SERVER_PORT, SERVER_HOST, () =>
    process.stdout.write(`Server up on http://${SERVER_HOST}:${SERVER_PORT}\n`)
  );
