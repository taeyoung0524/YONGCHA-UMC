import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import NotFound from './pages/not-found';
import MoviesPage from './pages/movies';
import RootLayout from './layout/root-layout';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CategoryPage from './pages/category';
import SearchPage from './pages/search';
import NowplayingPage from './pages/now-playing';
import TopratedPage from './pages/top-rated';
import PopularPage from './pages/popular';
import UpcomingPage from './pages/up-coming';

const router = createBrowserRouter([
  {
    path:'/',
    //element:<HomePage/>,
    element:<RootLayout/>,
    errorElement:<NotFound/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"movies/:movidId",
        element:<MoviesPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<SignupPage/>
      },
      {
        path:"/category",
        element:<CategoryPage/>
      },
      {
        path:"/search",
        element:<SearchPage/>
      },
      {
        path:"/now-playing",
        element:<NowplayingPage/>
      },
      {
        path:"/popular",
        element:<PopularPage/>
      },
      {
        path:"/up-coming",
        element:<UpcomingPage/>
      },
      {
        path:"/top-rated",
        element:<TopratedPage/>
      }
    ]
  },
])

function App(){
  return <RouterProvider router={router}/>
}

export default App;
