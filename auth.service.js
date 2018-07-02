"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto_1 = require("crypto");
const Moment = require("moment");
const core_1 = require("@rxdi/core");
const auth_config_1 = require("./auth.config");
let AuthInternalService = class AuthInternalService {
    constructor(config) {
        this.config = config;
    }
    verifyToken(token) {
        return jsonwebtoken_1.verify(token, this.config.cert, { algorithm: 'HS256' });
    }
    decrypt(password) {
        const decipher = crypto_1.createDecipheriv(this.config.cyper.algorithm, this.config.cyper.privateKey, this.config.cyper.iv);
        let dec = decipher.update(password, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    encrypt(password) {
        const cipher = crypto_1.createCipheriv(this.config.cyper.algorithm, this.config.cyper.privateKey, this.config.cyper.iv);
        let crypted = cipher.update(password, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    validate(token, callback) {
        // Check token timestamp
        const ttl = 30 * 1000 * 60;
        const diff = Moment().diff(Moment(token.iat * 1000));
        if (diff > ttl) {
            return callback(null, false);
        }
        callback(null, true, token);
    }
    sign(tokenData) {
        return jsonwebtoken_1.sign(tokenData, this.config.cert, { algorithm: this.config.algorithm });
    }
};
AuthInternalService = __decorate([
    core_1.Service(),
    __param(0, core_1.Inject(auth_config_1.AUTH_MODULE_CONFIG)),
    __metadata("design:paramtypes", [Object])
], AuthInternalService);
exports.AuthInternalService = AuthInternalService;
