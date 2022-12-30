import { Article } from "../../types/Article";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {

    const articles: Article[] = [
        {
          title: 'How to build webapps that scale',
          slug: 'slug-1',
          description: 'This is the description for the post.',
          body: 'This is the description for the post.',
          tagList: [],
          favorited: false,
          favoritesCount: 29,
          createdAt: new Date('2022-01-20'),
          updatedAt: new Date('2022-01-20'),
          author: {
            username: 'Eric Simons',
            bio: '',
            image: 'http://i.imgur.com/Qr71crq.jpg',
            following: false
          }
        },
        {
          title: 'The song you won\'t ever stop singing. No matter how hard you try.',
          slug: 'slug-2',
          description: 'This is the description for the post.',
          body: 'This is the description for the post.',
          tagList: [],
          favorited: false,
          favoritesCount: 29,
          createdAt: new Date('2022-01-20'),
          updatedAt: new Date('2022-01-20'),
          author: {
            username: 'Albert Pai',
            bio: '',
            image: 'http://i.imgur.com/N4VcUeJ.jpg',
            following: false
          }
        }
      ];

    return (
        <div className="home-page">
            <div className="banner">
            <div className="container">
                <h1 className="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
            </div>

            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                            <li className="nav-item">
                                <a className="nav-link disabled" href="">Your Feed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="">Global Feed</a>
                            </li>
                            </ul>
                        </div>
                        {
                            articles.map((article) => <ArticlePreview article={article} />)
                        }
                    </div>

                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;