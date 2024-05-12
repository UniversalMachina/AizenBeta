import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import QuestionPage from './QuestionPage';
import Review from './Review';
import Upload from './Upload';
import UploadGraphics from './UploadGraphics';
// import Websocketpage from './webpage';
// import Loading from './Loading';
function App() {
  return (
    <Router>
      <div>
        <Routes>
        {/* <Route path="/" element={<QuestionPage />} /> */}

        <Route path="/" element={<QuestionPage questionId={1} />} />
<Route path="/question2" element={<QuestionPage questionId={2} />} />
<Route path="/question3" element={<QuestionPage questionId={3} />} />
<Route path="/question4" element={<QuestionPage questionId={4} />} />
<Route path="/question5" element={<QuestionPage questionId={5} />} />
<Route path="/question6" element={<QuestionPage questionId={6} />} />
<Route path="/question7" element={<QuestionPage questionId={7} />} />
<Route path="/question8" element={<QuestionPage questionId={8} />} />
<Route path="/question9" element={<QuestionPage questionId={9} />} />
<Route path="/question10" element={<QuestionPage questionId={10} />} />
<Route path="/question11" element={<QuestionPage questionId={11} />} />
<Route path="/question12" element={<QuestionPage questionId={12} />} />
{/* <Route path="/upload" element={<Upload/>} /> */}
<Route path="/upload" element={<UploadGraphics/>} />

          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
