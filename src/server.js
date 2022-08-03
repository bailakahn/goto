import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      stocks: Model,
    },

    seeds(server) {
      server.create("stock", { name: "AC" });
      server.create("stocks", { name: "APPL" });
    },

    routes() {
      this.namespace = "api";

      this.get("/stocks", (schema) => {
        return schema.stocks.all();
      });
    },
  });

  return server;
}
