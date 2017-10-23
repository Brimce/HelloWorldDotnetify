import * as React from "react";
import { BaseView } from "_Typescript/index"
import Calendar  from 'Components/Calendar';

import moment from "moment";
import {message} from "antd";
export class About extends BaseView<{}, TypeWriter.Templates.IAboutState> {

    constructor(props: any) {
        super(`${About.name}VM`, props);
    }

    componentDidUpdate() {
        message.success(`moment : ${moment().locale()}`);
        //message.success(`Calendar local : ${this.calendar.props.locale}`);
    }
    
    onPanelChange = (value:any, mode:any):void => {
        console.log(value, mode);
    }
    
    render() {
        return (
            <div>
                Auteur:<b>{this.state.Auteur}</b>
                <Calendar/>
            </div>
        );
    }
}