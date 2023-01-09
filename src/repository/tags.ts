import ApiRepository from "./api";

export default class TagsRepository extends ApiRepository {
    public async findAll(): Promise<string[]> {
        return fetch(`${this.getApiUrl()}/api/tags`)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText); 
                }
                return res.json();
            })
            .then((json) => {
                return json.tags;
            })
            .catch((e) => {
                return [];
            });
    }
}