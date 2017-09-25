import * as React from "react";
import * as Dotnetify from "dotnetify";

export abstract class BaseView<TP, TS> extends React.Component<TP, TS>{

    readonly vm: Dotnetify.dotnetifyVM;

    protected constructor(readonly vmName: string, props: any) {
        super(props);

        this.vm = Dotnetify.react.connect(this.vmName, this);
        console.log(`state hydratation for ${this.vmName} = '${window.vmStates[this.vmName]}'`);
        this.state = window.vmStates[this.vmName] || {};
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    $dispatch(iValue: any): void {
        this.vm.$dispatch(iValue);
    };

}