import frFR from 'antd/lib/locale-provider/fr_FR';
import { LocaleProvider, Calendar} from "antd";
import * as React from "react";

const myCalendar = () => {
    return <LocaleProvider locale={frFR}>
               <Calendar/>
           </LocaleProvider>;
} ;

export default myCalendar;