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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/winners" element={<Winners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
