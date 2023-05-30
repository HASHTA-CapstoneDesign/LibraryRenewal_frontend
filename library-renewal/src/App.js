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
import HallymMuseum from './screens/hallymMuseum';
import JpStudy from './screens/jpStudy';
import Csquare from './screens/csquare';
import { Book } from 'react-bootstrap-icons';
import BookItem from './screens/BookItem';
import Hello from './screens/BookItem';
import Booklist from './screens/Booklist';
import ChatWindow from './components/ChatWindow';
import { useState } from 'react';

function App() {

  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

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
           <Route path="/book" element={
            <>
            <Booklist/>
            <Footer/>
            </>
          } />
        </Routes>
      </Router>
      <div className="chat-icon" style={{ position: 'fixed', bottom: 30, right: 30 }}>
        {showChat && <ChatWindow />}
        <img src="./chaticon.jpeg" alt="Chat Icon"
             style={{ width: '50px', height: '50px', cursor: 'pointer', position: 'relative' }}
             onClick={handleChatToggle} />
      </div>
    </div>
  );
}

export default App;
