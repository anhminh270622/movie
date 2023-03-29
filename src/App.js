
import Footer from './components/Footer';
import Header from './components/Header';
// import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from './router';
import "./App.scss"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={Page}
              />
            );
          })}
        </Routes>
        <Footer />
        {/* <Header />
        <Main /> */}
      </div>
    </Router>
  );
}

export default App;
