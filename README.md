# encrypted-echo-server

🙉 Just playing around with streams in Node.js

⚠️ There's some encryption going on here, but it's absolutely **_not suitable for real-world use_** (especially production!).

## Get started

1. `git clone https://github.com/nixpig/encrypted-echo-server.git`
2. `yarn install`
3. `yarn start`

The above will start two servers - `server` and `proxy`.

Requests made to `proxy` will be encrypted before being sent to `server`, where they will be decrypted, some transform run, then re-encrypted and streamed back to `proxy`, then streamed to the client.

Send some requests to see it in action using `netcat` or similar, e.g. `ncat localhost 3001`
