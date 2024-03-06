import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Characters from "./pages/Characters";


const router = createBrowserRouter([
    {
    //this is the route and when the URL in the browser matches this...
      path: "/",
      //render this component
      element: <App />,
      children: [
        {
            //to be shown first
            index: true,
            element: <HomePage />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "characters",
            element: <Characters />
        }
      ],
      errorElement: <NotFound />
    },
  ]);

export default router