import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Marketing from "../components/Marketing";
import Seo from "../components/Seo";
import PPC from "../components/PPC";
import SocialMedia from "../components/SocialMedia";
import WebDesign from "../components/WebDesign";
import Internet from "../components/Internet";
import Blog1 from "../blogs/Blog1";
import Blog2 from "../blogs/Blog2";
import Blog3 from "../blogs/Blog3";
import Blog4 from "../blogs/Blog4";
import BlogMark from "../blogs/BlogMark";
import Blog from '../pages/Blog'
import BlogHome from '../components/BlogHome'
const router = createBrowserRouter([
    // {
        // path: '/blogs',
        // element: <Blog/>,
        // children: [
            {
                path: 'blogs',
                element: <BlogHome/>
            },
            {
                path: 'marketing',
                element: <Marketing/>
            },
            {
                path: 'seo',
                element: <Seo/>
            },
            {
                path: 'ppc',
                element: <PPC/>
            },
            {
                path: 'social-media',
                element: <SocialMedia/>
            },
            {
                path: 'web-design',
                element: <WebDesign/>
            },
            {
                path: 'internet',
                element: <Internet/>
            },
            {
                path: 'voice-search',
                element: <Blog1/>           
            },
            {
                path: 'blog-2',
                element: <Blog2/>
            },
            {
                path: 'blog-3',
                element: <Blog3/>
            },
            {
                path: 'blog-4',
                element: <Blog4/>
            },
            {
                path: 'blog-marketing',
                element: <BlogMark/>
            }
        // ]
    // }
])


export default router