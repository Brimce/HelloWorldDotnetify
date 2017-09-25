import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { AppContainer } from "react-hot-loader";
import * as ReactDom from "react-dom";
import {App} from "./App";
import { HelloWorld } from "./Modules/HelloWorld/HelloWorld";
import { SimpleTs } from "./Modules/SimpleTs/SimpleTs";
import { Home } from "Pages/Home/Home";
import { Test } from "Pages/Test/Test";
import {About} from "Pages/About/About"
injectTapEventPlugin();


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
            <App />
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
