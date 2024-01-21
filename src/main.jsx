import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Onepup from './components/Onepup.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import SearchPage from './components/SearchPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "onePupp/:id",
        element: <Onepup />,
      },
      {
        path: "search/:text",
        element: <SearchPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
