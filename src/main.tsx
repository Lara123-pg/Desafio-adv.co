import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyles } from './styles/global.tsx';
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    titleOptions: 'rgb(201, 197, 190)',
    menu: 'rgb(232, 230, 227)',
    mainOptions: 'rgb(69, 223, 254)',
    descriptionOptions: 'rgb(175, 169, 158)'
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)