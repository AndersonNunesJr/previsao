import { Routes, Route, Navigate } from "react-router-dom";

import { OpenMeteo } from "../page/OpenMeteo";
import { Openweathermap } from "../page/Openweathermap";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/OpenMeteo" element={<OpenMeteo />} />
      <Route path="/Openweathermap" element={<Openweathermap />} />
      <Route path="*" element={<Navigate to="/Openweathermap" />} />
    </Routes>
  );
}
