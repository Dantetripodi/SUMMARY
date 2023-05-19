import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
// import Login from './pages/login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
      <Routes>
        <Route></Route>
      <App />
      </Routes>
    </React.StrictMode>
   </BrowserRouter>
   
)
