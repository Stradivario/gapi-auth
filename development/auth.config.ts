import { InjectionToken } from "@rxdi/core";

export const AUTH_MODULE_CONFIG = new InjectionToken('gapi-auth-module-config-injection-token');


export interface AuthInterface {
    onSubOperation(message, params, webSocket): any;
    onSubConnection(connectionParams): TokenData;
    validateToken(token, requestType: 'Query' | 'Subscription');
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