import * as React from "react";
import {ISimpleTsProps} from "Modules/SimpleTs/SimpleTs";

export const SimpleTsStateless = (props: ISimpleTsProps) =>
    <p>{`${props.name} from stateless ts`}</p>;