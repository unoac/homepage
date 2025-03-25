import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import fs from "fs";
import YAML from "yaml";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  const file = fs.readFileSync("./data/links.yml", "utf8");
  const yamljson = YAML.parse(file);
  return c.json(yamljson);
});

serve(
  {
    fetch: app.fetch,
    port: 3069,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
