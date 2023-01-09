import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from "react-router-dom";

import { makeServer } from "./mirage/index";
import SignUp from './components/SignUp/SignUp';
import HomePage from './components/HomePage/HomePage';
import Article, { loader as articleLoader } from './components/Article/Article';

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  makeServer({ environment });
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! There was an error.</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <SignUp />,
      },
      {
        path: "article/:slug",
        element: <Article />,
        loader: articleLoader,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
