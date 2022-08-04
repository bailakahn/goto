import { createServer, Model, Response } from "miragejs";

function getRandom(min, max, int) {
  const value = Math.random() * (max - min) + min;

  return int ? Math.floor(value) : value;
}

function generateData() {
  return Array.from(Array(10))
    .map(() => ({
      price: parseFloat(getRandom(1, 100).toFixed(2)),
      socialMedia: {
        fb: getRandom(1, 10, true),
        tw: getRandom(1, 10, true),
        in: getRandom(1, 10, true),
      },
    }))
    .map((data) => ({
      ...data,
      count: Object.keys(data.socialMedia).reduce(
        (acc, curr) => acc + data.socialMedia[curr],
        0
      ),
    }));
}

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      stock: Model,
    },

    seeds(server) {
      server.create("stock", {
        name: "AC",
        data: generateData(),
      });
      server.create("stock", {
        name: "APPL",
        data: generateData(),
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/stocks", (schema) => {
        return schema.stocks.all();
      });

      this.get("/stock/:name", (schema, request) => {
        const name = request.params.name;
        const stock = schema.stocks.findBy({ name });
        return stock || new Response(404);
      });
    },
  });

  return server;
}
