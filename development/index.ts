

import { Module, ModuleWithServices } from '@rxdi/core';
import { AuthInternalService } from './auth.service';
import { AUTH_MODULE_CONFIG, AuthModuleConfig } from './auth.config';

@Module()
export class AuthModule {
    public static forRoot(config?: AuthModuleConfig): ModuleWithServices {
        return {
            module: AuthModule,
            services: [
                AuthInternalService,
                {
                    provide: AUTH_MODULE_CONFIG,
                    useValue: config || {}
                }
            ]
        };
    }
}

export * from './auth.service';
export * from './auth.config';