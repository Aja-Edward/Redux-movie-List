import React from 'react'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Landingpage from './components/home/LandingPage';
import Movie from './components/home/Movie';
import store from './store';




const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <React.Fragment>
            <Route path='/' element={<Landingpage />} />
            <Route path='/movie/:Id/' element={<Movie />} />
          </React.Fragment>
        </Routes>
        <Footer />
      </Provider>
    </div>
  )
}

export default App