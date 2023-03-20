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
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [uploadComplete, setUploadComplete] = useState(true);
  const trackUpload = () => {
    setUploadComplete(!uploadComplete);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/videos").then((response) => {
      setVideos(response.data);
      setLoading(false);
    });
  }, [uploadComplete]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainVideo videos={videos} />} />
          <Route path="/:videoId" element={<MainVideo videos={videos} />} />
          <Route path="/Upload" element={<UploadVideo />} />
          <Route
            path="/Upload/Success"
            element={<UploadSuccess trackUpload={trackUpload} />}
          />
          <Route path="/Video-not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
