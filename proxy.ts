#!/usr/bin/env ts-node

import net from "net";
import { encrypt, decrypt, createLogger } from "./transforms";

import { PROXY_HOST, SERVER_HOST, PROXY_PORT, SERVER_PORT } from "./config";

const log = createLogger("proxy");

net
  .createServer((stream) => {
    const server = net.connect(SERVER_PORT, SERVER_HOST);

    stream
      .pipe(log("received data from input"))
      .pipe(encrypt)
      .pipe(log("encrypted data and piping to server"))
      .pipe(server)
      .pipe(log("received data from server"))
      .pipe(decrypt)
      .pipe(log("decrypted received data"))
      .pipe(stream);
  })
  .listen(PROXY_PORT, PROXY_HOST, () =>
    process.stdout.write(`Proxy up on http://${PROXY_HOST}:${PROXY_PORT}\n`)
  );
