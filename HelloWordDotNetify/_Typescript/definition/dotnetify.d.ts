declare module 'dotnetify' {

    export interface ITemplate {
        Target: string;
    }

    export interface IRouter {
        ssrState: (vmNazme: string) => any;
    }

    export class dotnetifyVM {
        constructor(iVMId: String, iReact: React.Component<any, any>, iGetState?: any, iSetState?: any, iVMArg?: any);
        $dispatch : (iValue: any) => void;
        $destroy: () => void;
        onRouteEnter: (path: string, template: ITemplate) => string;
    }

     export class react {
        static init : () => void;
        static connect(iVMId: String, iReact: React.Component<any, any>, iGetState?: any, iSetState?: any, iVMArg?: any): dotnetifyVM;
        static router: IRouter;
     }

}

