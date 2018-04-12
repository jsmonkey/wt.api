import { Body, Delete, Get, JsonController, Param, Post, Put, BodyParam, UseBefore, HttpCode, UseInterceptor } from 'routing-controllers';
import { Inject, Service } from 'typedi';

import { AuthService } from '../services';
import { SignUpValidator, SignInValidator } from '../middleware/validators';
import { User } from '../models';
import { Logger } from '../utils';
import { UserInterceptor } from '../interceptors';

@Service()
@JsonController()
export default class AuthController {

    @Inject()
    private authService: AuthService;

    @Post('/signin')
    @UseBefore(SignInValidator)
    async signin(@BodyParam('email') email: string, @BodyParam('password') password: string): Promise<any> {
        return this.authService.signin(email, password);
    }

    @Post('/signup')
    @HttpCode(201)
    @UseBefore(SignUpValidator)
    @UseInterceptor(UserInterceptor)
    signup(
        @BodyParam('email') email: string,
        @BodyParam('password') password: string,
    ): Promise<User> {
        return this.authService.signup(email, password);
    }
}
