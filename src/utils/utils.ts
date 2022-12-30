export async function getArticle(slug: string) {
    return fetch(`http://localhost:8080/api/articles/${slug}`)
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