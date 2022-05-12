import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/schedule/Contact';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <ChakraProvider>
        <ColorModeScript />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ChakraProvider>
    </StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
