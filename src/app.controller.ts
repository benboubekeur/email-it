import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';

import {User as UserModel} from '@prisma/client';
import {EmailService} from "./email/email.service";


@Controller()
export class AppController {
    constructor(
        private readonly emailService: EmailService
    ) {
    }


    @Post('user')
    async signupUser(
        @Body() userData: {
            email: string
            userName: string
            firstName?: string | null
            lastName?: string | null
        },
    ): Promise<UserModel> {
        return this.emailService.createUser(userData);
    }
}