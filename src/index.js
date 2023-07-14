import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import {App} from './components/app/App';
import {Provider} from "react-redux";
import { MantineProvider} from '@mantine/core';

import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode>
            <MantineProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </MantineProvider>
        </React.StrictMode>
);