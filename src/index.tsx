import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router} from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
    <Router>
        <Provider store={store}>
            <StrictMode>
                <App/>
            </StrictMode>
        </Provider>
    </Router>
);