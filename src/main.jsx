import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import { myNewTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ChakraBaseProvider theme={myNewTheme}>
                    <App />
                </ChakraBaseProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
