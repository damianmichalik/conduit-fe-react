import { Article } from "../../types/Article";
import { formatDate } from "../../functions/formatDate";

const ArticlePreview = (props: {article: Article}): JSX.Element => {

    return (
        <div className="article-preview">
            <div className="article-meta">
                <a href="profile.html"><img src={props.article.author.image} /></a>
                <div className="info">
                    <a href="" className="author">{props.article.author.username}</a>
                    <span className="date">{formatDate(props.article.createdAt, 'LL')}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {props.article.favoritesCount}
                </button>
            </div>
            <a href="" className="preview-link">
                <h1>{props.article.title}</h1>
                <p>{props.article.description}</p>
                <span>Read more...</span>
            </a>
        </div>
    )
};

export default ArticlePreview;