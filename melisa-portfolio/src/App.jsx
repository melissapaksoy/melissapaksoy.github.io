import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DemoVideo from "./pages/DemoVideo";
import ResumePage from "./pages/ResumePage";
import CoverLetterPage from "./pages/CoverLetterPage";
import GlamUpPage from "./pages/GlamUpPage";
import AcademicPDFPage from "./pages/AcademicPDFPage";
import ChatPage from "./pages/ChatPage";
import GomokuPage from "./pages/GomokuPage";
import PathwaysPage from "./pages/PathwaysPage";
import SlidePortalPage from "./pages/SlidePortalPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoVideo />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/cover-letter" element={<CoverLetterPage />} />
      <Route path="/projects/glamup" element={<GlamUpPage />} />
      <Route path="/projects/academicpdf" element={<AcademicPDFPage />} />
      <Route path="/projects/chat" element={<ChatPage />} />
      <Route path="/projects/gomoku" element={<GomokuPage />} />
      <Route path="/projects/pathways" element={<PathwaysPage />} />
      <Route path="/projects/slideportal" element={<SlidePortalPage />} />
    </Routes>
  );
}