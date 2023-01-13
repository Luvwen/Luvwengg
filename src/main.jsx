import { ChakraBaseProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { myNewTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraBaseProvider theme={myNewTheme}>
                <App />
            </ChakraBaseProvider>
        </Provider>
    </React.StrictMode>
);
