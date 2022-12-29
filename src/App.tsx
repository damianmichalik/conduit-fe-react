import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArticlePreview from './components/ArticlePreview/ArticlePreview';
import { Article } from './types/Article';

function App() {
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
    <div className="App">
      <Header />

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
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">programming</a>
                  <a href="" className="tag-pill tag-default">javascript</a>
                  <a href="" className="tag-pill tag-default">emberjs</a>
                  <a href="" className="tag-pill tag-default">angularjs</a>
                  <a href="" className="tag-pill tag-default">react</a>
                  <a href="" className="tag-pill tag-default">mean</a>
                  <a href="" className="tag-pill tag-default">node</a>
                  <a href="" className="tag-pill tag-default">rails</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
