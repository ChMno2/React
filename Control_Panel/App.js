import React from 'react';
import './pages/css/App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import WeatherInfo from './WeatherInfo';
import Test from './Test';
import NotFound from './NotFound';
import Header from './Header';
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/WeatherInfo" element={<WeatherInfo/>} />
          <Route path="/Test" element={<Test/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
      
    </div>
  );
}

export default App;
