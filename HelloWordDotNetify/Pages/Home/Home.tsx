import * as React from "react";
import { BaseView } from "_Typescript/index"
import Title from "Components/Title"

export class Home extends BaseView<{}, TypeWriter.Templates.IHomeState>{

    constructor(props: any) {
        super(`${Home.name}VM`, props);
    }

    render() {

        const paragraphs = this.state.Paragraphes.map((pDTO, index) =>
            <div key={index}>
                <h3>{pDTO.Title}</h3>
                <div>{pDTO.Content}</div>
            </div>
        );

        return (
            <div>
                <Title>{this.state.Title}</Title>
                <br />
                Contenu de la Page Home :

                {paragraphs}

                {this.state.Content}

                Sous contenu :
                {this.state.SubContent}
            </div>
        );
    }
}