import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./loyout";
import TracksPage from "./Pages/Track";
import CsseMajors from "./Pages/cssemajeor";
import SsMajors from "./Pages/ssmajor";
import YearSelection from "./Pages/years";
import ExamPage from "./Pages/exams";


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
        <Route path="trackmajor" element={<TracksPage />} />
        <Route path="cssemajors" element={<CsseMajors />} />
        <Route path="ssmajors" element={<SsMajors />} />
        <Route path="years" element={<YearSelection />} />
        <Route path="exams" element={<ExamPage />} />
      </Route>
    </Routes>
  );
}

export default App;
