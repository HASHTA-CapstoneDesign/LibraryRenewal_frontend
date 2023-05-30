import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyLoanPage from './pages/MyLoanPage';
import StudyRoomReservePage from './pages/StudyRoomReservePage';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Home from './screens/Home';
import Books from './screens/Books';
import Notice from './screens/Notice';
import NoticeBlog from './screens/NoticeBlog';
import Mypage from './screens/Mypage';
import Maps from './screens/Maps';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <GlobalStyle /> */}
      <Router>
        <Routes>
          <Route
            path="/myloan/*"
            element={
              <>
                <MyLoanPage />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/studyroom/reserve/*"
            element={
              <>
                <StudyRoomReservePage />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <Home />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/Books"
            element={
              <>
                <Books />
                <Footer />
              </>
            }
          />
          <Route
            path="/Notice"
            element={
              <>
                <Notice />
                <Footer />
              </>
            }
          />
          <Route path="/Notice/:id" element={<NoticeBlog />} />
          <Route
            path="/Maps"
            element={
              <>
                <Maps />
                <Footer />
              </>
            }
          />
          <Route
            path="/Mypage"
            element={
              <>
                <Mypage />
                <Footer />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <h1>Page Not Found</h1>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
