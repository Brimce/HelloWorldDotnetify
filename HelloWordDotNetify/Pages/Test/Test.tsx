import * as React from "react";
import { BaseView } from "_Typescript/index"

import {HelloWorld} from "Modules/HelloWorld/HelloWorld";

export class Test extends BaseView<{}, TypeWriter.Templates.ITestState> {

    constructor(props: any) {
        super(`${Test.name}VM`, props);
    }

    render() {
        return (
            <div>
                C'est le test {this.state.Test} en date du {this.state.Date}
                <HelloWorld/>
            </div>
        );
    }
}