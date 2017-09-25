import * as React from "react";
import * as Dotnetify from "dotnetify";
import * as Rx from "rxjs/Rx";
import { BaseView } from "_Typescript/index";

export class HelloWorld extends BaseView<{}, TypeWriter.Templates.IHelloWorldState> {

    inputTextChangeSubscription$: Rx.Subscription;
    textInput: HTMLInputElement;

    constructor(props: any) {
        super(`${HelloWorld.name}VM`, props);
     }
    
    componentDidMount() {
        //console.log(`componentDidMount'`);
        //console.log(`input : '${this.textInput}'`);
        this.inputTextChangeSubscription$ = this.subscribeToEvent(this.textInput, this.vm);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.inputTextChangeSubscription$.unsubscribe();
    }

    subscribeToEvent(input: HTMLInputElement, vm: Dotnetify.dotnetifyVM):Rx.Subscription {

        return Rx.Observable
            .fromEvent(input, "input")
            .map((event:React.FormEvent<HTMLInputElement>)=> event.currentTarget.value)
            .debounce(() => Rx.Observable.interval(1000))
            .subscribe(
                value => {
                    console.log(value);
                    vm.$dispatch({ Submit: `${value}` });
                },
                error => console.log(error),
                () => console.log("unsuscribe")
            );
    }

    render() {
        return (
            <div>
                Bien le bonjour! Toi la bas ! je n'y crois pas :D §<br />
                {this.state.Greetings}<br />
                Server time is: {this.state.ServerTime}
                <input type="text" ref={(input: HTMLInputElement) => { this.textInput = input; }} />
                <button
                    onClick={(e: any) => this.$dispatch({ Submit: `${this.state.Greetings}`})}>
                    Push Greetings test
                    </button>
            </div>
        );
    }

}