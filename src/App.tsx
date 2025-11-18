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
// import Speakers from "./views/Speakers";
// import Events from "./views/Events.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About20242025 from "./views/About2024-2025.tsx";
import About from "./views/About2025-2026.tsx";
import Sponsors from "./views/Sponsors.tsx";
import Courses from "./views/Courses.tsx";
import Docs from "./views/Writeups.tsx";
import DocsEditPage from "./views/WriteupsEdit.tsx";
import FAQ from "./views/FAQ.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2024-2025" element={<About20242025 />} />
      {/* <Route path="/events" element={<Events />} /> */}
      {/* <Route path="/speakers" element={<Speakers />} /> */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/winners" element={<Winners />} />
      <Route path="/writeups" element={<Docs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/writeups/edit" element={<DocsEditPage />} />

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
