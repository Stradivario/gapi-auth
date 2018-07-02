import { InjectionToken } from "@rxdi/core";
export declare const AUTH_MODULE_CONFIG: InjectionToken<{}>;
export interface AuthInterface {
    onSubOperation(message: any, params: any, webSocket: any): any;
    onSubConnection(connectionParams: any): TokenData;
    validateToken(token: any, requestType: 'Query' | 'Subscription'): any;
}
export interface TokenData {
    email: string;
    scope: Array<string>;
    id: number;
}
export interface AuthModuleConfig {
    cert: any;
    algorithm: string;
    cyper: {
        algorithm: string;
        privateKey: string;
        iv: string;
    };
}
