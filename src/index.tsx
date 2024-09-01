// import * as React from 'react';
// // import { ChakraProvider } from '@chakra-ui/react';
// import * as ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const rootElement = document.getElementById('root') as HTMLElement;

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     {/* <ChakraProvider> */}
//       <App />
//     {/* </ChakraProvider> */}
//   </React.StrictMode>
// );
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)
