import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import VkApp from './containers/vk_app'


render(
    <Provider store={store}>
        <VkApp />
    </Provider>,
    document.getElementById('root')
)