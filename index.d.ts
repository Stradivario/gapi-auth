import { ModuleWithServices } from '@rxdi/core';
import { AuthModuleConfig } from './auth.config';
export declare class AuthModule {
    static forRoot(config?: AuthModuleConfig): ModuleWithServices;
}
export * from './auth.service';
export * from './auth.config';
