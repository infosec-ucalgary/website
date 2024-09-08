import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Winners from "./views/Winners";
import Resources from "./views/Resources";
import Speakers from "./views/Speakers";
import Calendar from "./views/Calendar";
import About from "./views/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/winners" element={<Winners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="bg-site-background bg-cover bg-no-repeat bg-fixed min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
