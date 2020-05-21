import React from 'react';
import AppHolder from './components/AppHolder/AppHolder';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
       <BrowserRouter>
          <AppHolder/>
       </BrowserRouter>
    );
}

export default App;
