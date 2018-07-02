"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const auth_service_1 = require("./auth.service");
const auth_config_1 = require("./auth.config");
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot(config) {
        return {
            module: AuthModule_1,
            services: [
                auth_service_1.AuthInternalService,
                {
                    provide: auth_config_1.AUTH_MODULE_CONFIG,
                    useValue: config || {}
                }
            ]
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    core_1.Module()
], AuthModule);
exports.AuthModule = AuthModule;
__export(require("./auth.service"));
__export(require("./auth.config"));
var AuthModule_1;
