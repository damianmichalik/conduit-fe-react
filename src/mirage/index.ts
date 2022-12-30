import { createServer, Response } from "miragejs"

export function makeServer({ environment = "test" }) {
  return createServer({
    seeds(server) {
      server.db.loadData({
        articles: [
          {
            "slug": "slug-1",
            "title": "How to train your dragon",
            "description": "Ever wonder how?",
            "body": "It takes a Jacobian",
            "tagList": ["dragons", "training"],
            "createdAt": "2016-02-18T03:22:56.637Z",
            "updatedAt": "2016-02-18T03:48:35.824Z",
            "favorited": false,
            "favoritesCount": 0,
            "author": {
              "username": "jake",
              "bio": "I work at statefarm",
              "image": "https://i.stack.imgur.com/xHWG8.jpg",
              "following": false
            }
          }
        ],
      })
    },

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
        };
      });

      this.get("/articles/:slug", (schema, request) => {
        const article = schema.db.articles.findBy({
          "slug": request.params.slug
        })

        if (article === null) {
          return new Response(404)
        }

        return {
          "article": article
        }
      });
    },
  });
}

