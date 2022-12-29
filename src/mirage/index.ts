import { createServer } from "miragejs"

export function makeServer({ environment = "test" }) {
  return createServer({
    routes() {
      this.urlPrefix = 'http://localhost:8080';
      this.namespace = "api"
  
      this.get("/tags", () => {
        return {
          tags: [
            "programming",
            "javascript",
            "emberjs",
            "angularjs",
            "react",
            "mean",
            "node",
            "rails"
          ],
        }
      })
    },
  });
}

