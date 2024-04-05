import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyles } from './styles/global.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)