import { useLoaderData } from "react-router-dom";
import ArticlesRepository from "../../repository/articles";
import { Article as ArticleType } from '../../types/Article';
import Comment from "./Comment";

export async function loader({ params }: {params: any}) {
    const articlesRepository: ArticlesRepository = new ArticlesRepository();
    const article: ArticleType|null = await articlesRepository.findBySlug(params.slug);
    if (!article) {
        throw new Response("", {
          status: 404,
          statusText: "Not Found",
        });
    }
    return article;
}

const Article = () => {
    const article: ArticleType = useLoaderData() as ArticleType;

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                <h1>{article.title}</h1>

                <div className="article-meta">
                    <a href="">
                        <img src={article.author.image} alt={article.author.username} />
                    </a>
                    <div className="info">
                        <a href="" className="author">{article.author.username}</a>
                        <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round"></i>
                        &nbsp; Follow {article.author.username} <span className="counter">(10)</span>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart"></i>
                        &nbsp; Favorite Post <span className="counter">(29)</span>
                    </button>
                </div>
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        {article.body}
                    </div>
                </div>

                <hr />

                <div className="article-actions">
                    <div className="article-meta">
                        <a href="profile.html">
                            <img src={article.author.image} alt={article.author.username} />
                        </a>
                        <div className="info">
                            <a href="" className="author">{article.author.username}</a>
                            <span className="date">January 20th</span>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <i className="ion-plus-round"></i>
                            &nbsp; Follow {article.author.username}
                        </button>
                        &nbsp;
                        <button className="btn btn-sm btn-outline-primary">
                            <i className="ion-heart"></i>
                            &nbsp; Favorite Post <span className="counter">(29)</span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <form className="card comment-form">
                        <div className="card-block">
                            <textarea className="form-control" placeholder="Write a comment..."></textarea>
                        </div>
                        <div className="card-footer">
                            <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                            <button className="btn btn-sm btn-primary">Post Comment</button>
                        </div>
                        </form>

                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Article;