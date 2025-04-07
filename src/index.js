/* istanbul ignore file */
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

/**
 * Create DOM node for the root app
 */
const rootAppContainer = document.createElement('div');
rootAppContainer.setAttribute('id', 'testApp');
document.body.insertBefore(rootAppContainer, document.body.firstChild);

const root = createRoot(rootAppContainer);

root.render(
    <>
        <App />
    </>
);

export default rootAppContainer;
