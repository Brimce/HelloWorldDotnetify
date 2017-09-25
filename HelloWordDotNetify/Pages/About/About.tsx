import * as React from "react";
import { BaseView } from "_Typescript/index"

export class About extends BaseView<{}, TypeWriter.Templates.IAboutState> {

    constructor(props: any) {
        super(`${About.name}VM`, props);
    }

    render() {
        return (
            <div>
                Auteur:<b>{this.state.Auteur}</b>
            </div>
        );
    }
}