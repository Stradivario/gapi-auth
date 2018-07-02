import { AuthModuleConfig, TokenData } from './auth.config';
export declare class AuthInternalService {
    private config;
    constructor(config: AuthModuleConfig);
    verifyToken(token: any): TokenData;
    decrypt(password: string): string;
    encrypt(password: string): string;
    validate(token: any, callback: any): any;
    sign(tokenData: TokenData): string;
}
