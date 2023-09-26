import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import { Main } from './pages'

import './App.css';

function App() {
  	return (
    	<div>
      		<Router>
        		<ScrollToTop />
        		
        		<Routes>
          			<Route path="/" element={<Main />} />
        		</Routes>
        		
        		<BackToTop />
      		</Router>
    	</div>
  	);
}

export default App;
