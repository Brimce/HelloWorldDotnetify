import * as React from "react";

export interface ISimpleTsProps {
    name : String
}

export class SimpleTs extends React.Component<ISimpleTsProps,any> {
    public render() {
        return <p>{`Hi ${this.props.name} from ts !`}</p>;
    }
}
    
