import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter as Router} from 'react-router-dom';

describe('renders all pages', () => {
    test('renders learn react link', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        )
        const linkElement = screen.getByText('Games');
        const linkElement2 = screen.getByText('Platforms')
        expect(linkElement).toBeInTheDocument();
        expect(linkElement2).toBeVisible()
    });
})