import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Post, Posts } from "../pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;