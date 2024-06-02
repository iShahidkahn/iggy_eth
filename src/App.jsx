import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import './App.css'
import Redis from './pages/Redis';
import AmazonS3 from './pages/AmazonS3';
import McRouter from './pages/McRouter';
import EndpointX from './pages/EndpointX';
import Observability from './pages/Observability';
import Settings from './pages/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="endpoints/redis" element={<Redis />} />
          <Route path="endpoints/amazon-s3" element={<AmazonS3 />} />
          <Route path="endpoints/mc-router" element={<McRouter />} />
          <Route path="endpoints/endpoint-x" element={<EndpointX />} />
          <Route path="/observability" element={<Observability />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
