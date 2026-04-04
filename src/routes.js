import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import { publicPages } from "./pages/pages.js";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return;
};

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<publicPages.LandingPage />} />
        <Route path="aboutus" element={<publicPages.AboutUs />} />
        <Route path="adoption" element={<publicPages.Adoption />} />
        <Route path="sponsorship" element={<publicPages.Sponsorship />} />
        <Route path="contact" element={<publicPages.Contact />} />
        <Route path="donation" element={<publicPages.Donation />} />
        <Route path="volunteers" element={<publicPages.Volunteers />} />
      </Routes>
    </BrowserRouter>
  );
}
