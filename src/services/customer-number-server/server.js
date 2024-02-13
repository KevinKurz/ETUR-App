// server.js

import { fastify } from "fastify";
import { routes as customersRoutes } from "./customers.js";

const server = fastify();

server.register(customersRoutes);

// Starte den Server
server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server läuft auf ${address}`);
});
