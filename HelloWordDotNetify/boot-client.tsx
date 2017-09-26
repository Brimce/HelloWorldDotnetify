import * as React from "react";
import { AppContainer } from "react-hot-loader";
import * as ReactDom from "react-dom";
import {App} from "./App";
import { HelloWorld } from "./Modules/HelloWorld/HelloWorld";
import { SimpleTs } from "./Modules/SimpleTs/SimpleTs";
import { Home } from "Pages/Home/Home";
import { Test } from "Pages/Test/Test";
import {About} from "Pages/About/About"
import moment from 'moment';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';

// It's recommended to set locale in entry file globaly.
import 'moment/locale/fr';
moment.locale('fr');

// Export the library modules into global scope for the components that will be loaded on-demand by the router.
Object.assign(window, {
    App: App,
    HelloWorld: HelloWorld,
    SimpleTs: SimpleTs,
    Home: Home,
    Test:Test,
    About:About
}
);

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
