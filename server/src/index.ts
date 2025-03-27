import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import fs from "fs";
import YAML from "yaml";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hono server is running!");
});

app.get("/links", (c) => {
  const file = fs.readFileSync("./data/links.yml", "utf8");
  const yamljson = YAML.parse(file);
  return c.json(yamljson);
});

const port = 3001;

serve({
  fetch: app.fetch,
  port,
});
