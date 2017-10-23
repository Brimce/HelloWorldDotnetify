import * as React from "react";
import { AppContainer } from "react-hot-loader";
import * as ReactDom from "react-dom";
import {App} from "./App";
import moment from 'moment';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';

// It's recommended to set locale in entry file globaly.
import 'moment/locale/fr';
moment.locale('fr');

function renderApp() {
    ReactDom.render(
        <AppContainer>
            <LocaleProvider locale={frFR}>
                <App />
            </LocaleProvider>
        </AppContainer>
        , document.getElementById("Content")
    );
}

renderApp();

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    //console.log(`HMR enabled !`);
    module.hot.accept("./App", () => {
        renderApp();
    });
}
