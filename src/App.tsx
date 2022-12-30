import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArticlePreview from './components/ArticlePreview/ArticlePreview';
import { Article } from './types/Article';
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
