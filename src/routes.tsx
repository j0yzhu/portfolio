import {
    createBrowserRouter
} from "react-router";

import Layout from "@/layout.tsx";
import App from "@/App.tsx";
import IndexPage from "@/pages";
import GalleryPage from "@/pages/gallery.tsx";
import AboutPage from "@/pages/about.tsx";
import LeadershipPage from "@/pages/leadership.tsx";
import ProjectsPage from "@/pages/projects.tsx";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                element: <Layout/>,
                children: [
                    {
                        path: "/",
                        element: <IndexPage/>
                    },
                    {
                        path: "/gallery",
                        element: <GalleryPage/>
                    },
                    {
                        path: "/about",
                        element: <AboutPage/>
                    },
                    {
                        path: "/leadership",
                        element: <LeadershipPage/>
                    },
                    {
                        path: "/projects",
                        element: <ProjectsPage/>
                    },
                ]
            }
        ]
    },
]);