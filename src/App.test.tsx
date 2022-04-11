import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import PageOfGames from './Pages/PageOfGames';

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    );
    const linkElement = screen.getByText('Games');
    expect(linkElement).toBeInTheDocument();
});
test('renders games page', ()=>{
    render( <Provider store={store}>
            <Router>
                <PageOfGames/>
            </Router>
        </Provider>
    );
    const linkElement = screen.getByTestId('data_testId')
    expect(linkElement).toBeInTheDocument()
})
