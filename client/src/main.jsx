import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";
import "./scss/styles.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import App from "./App.jsx";
import Forum from "./pages/Forum";
import ForumPost from "./components/ForumPost/Post";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import NewPost from "./pages/NewPost.jsx";
import PostDetails from "./pages/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Forum />,
      },
      {
        path: "/forum/:postId",
        element: <ForumPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/profiles/:profileId",
        element: <Profile />,
      },
      {
        path: "/newpost",
        element: <NewPost/>
      },
      {
        path: "/postdetails/:postId",
        element: <PostDetails/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
