import * as React from "react";
import { BaseView } from "_Typescript/index";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Colors from "Components/Colors";

import Title from "Components/Title";

import * as Dotnetify from "dotnetify";
import { RouteLink } from "dotnetify/dist/dotnetify-react.router";


export interface ILink{
    Id: string;
    Route: string;
    Caption: string;
    Description: string;
}

export interface IAppState{
    Links: Array<ILink>;
    Message: string;
}

export class App extends BaseView<{}, IAppState> {

    constructor(props: any) {
        super(`${App.name}VM`, props);
        
        console.log(`window.vmStates : ${window.vmStates}`);
        console.log(`server hydratation app link : '${window.vmStates.AppVM.Links[0].Caption}'`);
        console.log(`server hydratation app message : '${window.vmStates.AppVM.Message}'`);

        this.vm.onRouteEnter =
            (path: string, template: Dotnetify.ITemplate) => template.Target = "CurrentPageDiv";

        this.state = window.vmStates.AppVM;
        console.log(`App message : ${this.state.Message}`);
    }

    handleClick = (e: React.FormEvent<HTMLButtonElement>) : void => {
        e.preventDefault();
        this.$dispatch({ Submit: "nouveau message" });
    }
    //<RouteLink route="route"></RouteLink>
    //        <RouteTarget id="CurrentPageDiv"/>

    render() {
        console.log(`App message : ${this.state.Message}`);

        const Menu = styled.ul`
        color: green;
        `;
        
        const links = this.state.Links.map((link) =>
            <li key={link.Id}><RouteLink vm={this.vm} route={link.Route}>{link.Caption}</RouteLink></li>
        );
        

        const MessageContainer = styled.div`
	        /* all declarations will be prefixed */
	        padding: 2em 1em;
	        background: papayawhip;

	        /* pseudo selectors work as well */
	        &:hover {
		        background: palevioletred;
	        }

	        /* media queries are no problem */
	        @media (max-width: 600px) {
		        background: tomato;

		        /* nested rules work as expected */
		        &:hover {
			        background: yellow;
		        }
	        }

	        > p {
		        /* descendant-selectors work as well, but are more of an escape hatch */
		        text-decoration: underline;
	        }

	        /* Contextual selectors work as well */
	        html.test & {
		        display: none;
	        }
        `;

        //{ this.state.Message && <MessageContainer><p>this.state.Message</p></MessageContainer> }

        return (
            <ThemeProvider theme={Colors}>
                <div>
                    <Title>La couleur du titre c'est important {Colors.main}...!</Title>

                    {this.state.Message && <MessageContainer><p>{this.state.Message}</p></MessageContainer> }                    
                    <button
                        onClick={this.handleClick}>
                        Change message
                    </button>
                    <br />
                    <Menu>
                        {links}
                    </Menu>
                   
                    <div id="CurrentPageDiv" />
                </div>
            </ThemeProvider>
        );
    }
}
