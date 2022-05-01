import {Provider} from 'react-redux';
import {store} from '../../store';
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import GamesByPlatform from '../../Pages/GamesByPlatform';
import {BrowserRouter as Router} from 'react-router-dom';

beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
});
describe('testing page of games by platform', () => {
    test('page renders correct', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <GamesByPlatform/>
                </Router>
            </Provider>
        )
        expect(screen.getByRole('heading', {name: /loading/i})).toBeVisible()
        await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    })
})