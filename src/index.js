import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Headers from './components/header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FooterS from './components/footer';
import Vista1 from './views/vista1';
import MyPdfViewer from './views/aviso';
import About from './views/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Vista1 />,
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/aviso_de_privacidad",
    element:<MyPdfViewer/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Headers />
      <FooterS />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
