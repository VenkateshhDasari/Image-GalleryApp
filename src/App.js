import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./components/GetImages"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetImages />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
