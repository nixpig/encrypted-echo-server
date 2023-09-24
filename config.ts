import crypto from "crypto";

export const ENCRYPTION = "aes-192-cbc";
export const KEY = crypto.scryptSync("123", "salt", 24);
export const IV = "1234567890123456";

export const SERVER_HOST = "localhost";
export const SERVER_PORT = 3000;

export const PROXY_HOST = "localhost";
export const PROXY_PORT = 3001;
