import { createServerRenderer, RenderResult } from "aspnet-prerendering";
import { renderToString }  from "react-dom/server";
import * as React from "react";
import {App} from "./App";

export default createServerRenderer( params => { 
    return new Promise<RenderResult>((resolve, reject) => {
        //const result = ` 
        //    <h1>My awesome headline!</h1> 
        //    <p>Node time is: ${ new Date()}</p> 
        //    <p>Request path: ${ params.location.path}</p> 
        //    <p>Absolute URL: ${ params.absoluteUrl}</p> 
        //    <p>Data: ${params.data.userType}</p>` 
        //jQuery("test").innerHTML = "bonjour";
        //const result = renderToString(<Simple name="zezef"/>);
        const result = renderToString(<App/>);
        resolve({ 
            html: result
        }); 
    }); 
});
