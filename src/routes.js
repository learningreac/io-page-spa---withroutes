import Layout from "./components/Layout/Layout";
import Star from "./components/pages/Star";
import Visualization from "./components/pages/Visualization";
import FullstackList from "./components/pages/FullstackList";
import Tools from "./components/pages/Tools";

const routes = [
    {
        path: "/io-page-app",
        element: <Layout />,
        children: [
            { index: true, element: <Star /> },
            { path: "Stared", element: <Star /> },
            { path: "Visualization", element: <Visualization /> },
            { path: "Fullstack", element: <FullstackList /> },
            { path: "Tools", element: <Tools /> },
        ]
    }
];

export default routes;