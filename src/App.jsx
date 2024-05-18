import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import UploadGraphics from "./pages/UploadGraphics";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {

  // const location = useLocation();
  // const pathname = location.pathname;

  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const handleLogin = (status, username) => {
    setLoggedIn(status);
    setUsername(username); // Set the username
    localStorage.setItem("isLoggedIn", status.toString());
    localStorage.setItem("username", username); // Store the username in localStorage
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername(""); // Clear the username
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username"); // Remove the username from localStorage
  };

  return (
    <Router>

      <div>
        <Routes>
          <Route path="/" element={<QuestionPage questionId={1} />} />
          <Route path="/question2" element={<QuestionPage questionId={2} />} />
          <Route path="/question3" element={<QuestionPage questionId={3} />} />
          <Route path="/question4" element={<QuestionPage questionId={4} />} />
          <Route path="/question5" element={<QuestionPage questionId={5} />} />
          <Route path="/question6" element={<QuestionPage questionId={6} />} />
          <Route path="/question7" element={<QuestionPage questionId={7} />} />
          <Route path="/question8" element={<QuestionPage questionId={8} />} />
          <Route path="/question9" element={<QuestionPage questionId={9} />} />
          <Route
            path="/question10"
            element={<QuestionPage questionId={10} />}
          />
          <Route
            path="/question11"
            element={<QuestionPage questionId={11} />}
          />
          <Route
            path="/question12"
            element={<QuestionPage questionId={12} />}
          />
          <Route path="/loading" element={<Loading username={username}/>} />
          <Route path="/upload" element={<UploadGraphics/>} />


          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        </Routes>
      </div>
      </Router>

  );
}

export default App;
