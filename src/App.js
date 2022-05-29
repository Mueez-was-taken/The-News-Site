import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const pageSize = 6
  const [progress, setProgress] = useState(0)
  const ApiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>

          <Route exact path="/" element={<News setProgress={setProgress} apiKey={ApiKey} key="general" pageSize={pageSize} category="general" country="us" />}></Route>

          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={ApiKey} key="business" pageSize={pageSize} category="business" country="us" />}></Route>

          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={ApiKey} key="entertainment" pageSize={pageSize} category="entertainment" country="us" />}></Route>

          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={ApiKey} key="health" pageSize={pageSize} category="health" country="us" />}></Route>

          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={ApiKey} key="science" pageSize={pageSize} category="science" country="us" />}></Route>

          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={ApiKey} key="sports" pageSize={pageSize} category="sports" country="us" />}></Route>

          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={ApiKey} key="technology" pageSize={pageSize} category="technology" country="us" />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}