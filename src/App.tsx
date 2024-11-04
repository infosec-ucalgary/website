import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Winners from "./views/Winners";
import Resources from "./views/Resources";
import Speakers from "./views/Speakers";
import Events from "./views/Events.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./views/About.tsx";
import Sponsors from "./views/Sponsors.tsx";
import Docs from "./views/Docs.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/winners" element={<Winners />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
