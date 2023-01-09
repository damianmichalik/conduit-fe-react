import { Article } from "../types/Article";
import ApiRepository from "./api";

export default class ArticlesRepository extends ApiRepository {
    public async findBySlug(slug: string): Promise<Article|null> {
        return fetch(`${this.getApiUrl()}/api/articles/${slug}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText); 
                }
                return res.json();
            })
            .then((json) => json.article)
            .catch((res) => {
                return null;
            });
    };
}