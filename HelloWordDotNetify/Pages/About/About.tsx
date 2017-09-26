import * as React from "react";
import { BaseView } from "_Typescript/index"
import { Calendar } from 'antd';
import moment from "moment";
import {message} from "antd";

export class About extends BaseView<{}, TypeWriter.Templates.IAboutState> {

    constructor(props: any) {
        super(`${About.name}VM`, props);
        //moment.locale('fr');
        message.info(`moment : ${moment().locale()}`);
    }

    onPanelChange = (value:any, mode:any):void => {
        console.log(value, mode);
    }
    render() {
        moment.locale('fr');
        return (
            <div>
                Auteur:<b>{this.state.Auteur}</b>
                <Calendar onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}