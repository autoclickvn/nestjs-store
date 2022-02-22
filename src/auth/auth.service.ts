import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from 'users/users.service';
import { getUserInfo } from 'utils/helper';
import { sendResSuccess } from 'utils/send-response';

const bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (!user || !user.password) {
      return null;
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return null;
    }

    return user;
  }

  async login(req: any, res: Response) {
    const { user } = req;
    const payload = { username: user.username, sub: user.userId };

    const data = {
      user: getUserInfo(user._doc),
      token: {
        access_token: this.jwtService.sign(payload),
      },
    };

    return sendResSuccess(res, data);
  }
}
