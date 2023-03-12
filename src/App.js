import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import UploadSuccess from "./pages/UploadSuccess/UploadSuccess";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const api_key = "6e3d80c0-6268-484d-822e-eb7e919f271b";
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${api_key}`)
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MainVideo videos={videos} api_key={api_key} />}
          />
          <Route
            path="/:videoId"
            element={<MainVideo videos={videos} api_key={api_key} />}
          />
          <Route path="/Upload" element={<UploadVideo />} />
          <Route path="/Upload/Success" element={<UploadSuccess />} />
          <Route path="/Video-not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
