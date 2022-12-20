import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async getUsers() {
    return { user: 'USER' };
  }
}
