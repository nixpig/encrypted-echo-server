#!/usr/bin/env ts-node

import { spawn } from "child_process";

const server = spawn("./server.ts");
const proxy = spawn("./proxy.ts");

for (const child of [server, proxy]) {
  child.stderr.on("data", (data) => process.stderr.write(data.toString()));
  child.stdout.on("data", (data) => process.stdout.write(data.toString()));
}
