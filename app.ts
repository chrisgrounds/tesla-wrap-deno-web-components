import { Drash } from "https://deno.land/x/drash@v1.0.0/mod.ts";
import { readFileStrSync } from "https://deno.land/std/fs/mod.ts"

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = readFileStrSync("index.html");
    return this.response;
  }
}

const server = new Drash.Http.Server({
  directory: Deno.cwd(),
  response_output: "text/html",
  resources: [HomeResource],
  static_paths: ["/public"]
});

const HOSTNAME = "localhost"
const PORT = 8080

server.run({
  hostname: HOSTNAME,
  port: PORT
});

console.log(`Server listening: http://${HOSTNAME}:${PORT}`);
